import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./ContextsSesion";


export const Proted = () => {
    const cookie = decodeURIComponent(document.cookie);
    const session = cookie.split("=")[0] == "connect.sid";
    if (!session) {
        return (
            <>
                <Outlet />
                <Navigate to="/" />
            </>
        );
    } else {

        if (location.pathname != "/") {
            return (
                <>
                    <Outlet />
                </>
            );
        } else {
            return (
                <>
                    <Outlet />
                    <Navigate to="/dashboard" />
                </>
            );
        }
    }
}

