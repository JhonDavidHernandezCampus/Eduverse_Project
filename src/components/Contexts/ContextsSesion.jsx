import { useContext, createContext, useState, useEffect } from "react";


const SessionContexts = createContext();


export const useAuth = () => {
    const context = useContext(SessionContexts);
    if (!context) throw new Error("Error in the context este debe ser padre");
    return context;
}

export const AuthProvider = ({ children }) => {
    const [stateSession, getSesion] = useState(false);

    useEffect(() => {
        const validSession = () => {
            const cookie = decodeURIComponent(document.cookie);
            const session = cookie.split("=")[0];

            if (session) {
                getSesion(true);
            } else {
                getSesion(false);
            }
        }
        validSession();
    }, [])

    const logOut = async () => {
        const serve = JSON.parse(import.meta.env.VITE_SERVER);
        const client_port = import.meta.env.VITE_PORT;
        const client_host = import.meta.env.VITE_HOST;
        try {
            let response = await fetch(`http://${serve.localhost}:${serve.port}/sesion`, {
                method: "GET",
                credentials: "include",
            });
            //console.log(response);
        } catch (error) {
            //console.log(error);
        }
        document.cookie = `connect.sid=;  expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        //console.log(document.cookie);
        window.location.href = `http://${client_host}:${client_port}/`;
    }

    return (
        <SessionContexts.Provider value={{ stateSession, logOut }}>
            {children}
        </SessionContexts.Provider>
    )

}

export default SessionContexts;