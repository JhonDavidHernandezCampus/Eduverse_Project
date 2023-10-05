import React, { useEffect, useState } from "react";
import CardCurse from "./CarsCurse";
import { Sidebar } from "./Sidebar";

export const Body = () => {
    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        async function datosApi() {
            try {
                let respu = await (await fetch(`http://192.168.128.23:5010/cursos/all`)).json();
                ////console.log(respu, "respuesta del servidor");
                if (!Array.isArray(respu)) throw "Error in serve";
                setCursos(respu);
            } catch (error) {
                //console.log({ error: "Petition not fount", message: error });
            }
        }
        datosApi();
    }, []);

    //cusosApi()
    return <>
        <div className="grid grid-cols-6">
            <div className="col-span-6 sm:col-span-5 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-20 p-4 opacity-75">
                {cursos.map((element, index) =>
                    <CardCurse key={index} 
                    title={element.folder} 
                    img={element.imagenCourse} 
                    description={element.nameCourse} 
                    duracion={element.duracion}/>
                    
                )}
            </div>
            <div className="invisible opacity-50 sm:visible ">
                <Sidebar />
            </div>
        </div>
    </>
}