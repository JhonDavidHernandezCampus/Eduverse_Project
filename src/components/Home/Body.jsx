import React, { useEffect, useState } from "react";
import CardCurse from "./CarsCurse";
import { Sidebar } from "./Sidebar";

let datosPrueba = [
    {
        "folder": "docker",
        "nameCourse": "Docker - Guía práctica de uso para desarrolladores",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/2100309/FJdi8w3ORKSdzhLcV53c_Docker.jpg"
    },
    {
        "folder": "git",
        "nameCourse": "GIT+GitHub: Todo un sistema de control de versiones de cero",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/1870146/idTZJiouTqWbJrtKBloh_git-github.jpg"
    },
    {
        "folder": "javascript",
        "nameCourse": "JavaScript Moderno: Guía para dominar el lenguaje",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/1907483/IaFyqRTQCAph7DfFVjuA_Javascript-moderno-refresh1.png"
    },
    {
        "folder": "nodejs",
        "nameCourse": "Node.Js: De cero a experto",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/63BJ0OoTdCl8SPMlIOpA_NODE-JS-COVER-CURSO.jpg"
    },
    {
        "folder": "react",
        "nameCourse": "React: De cero a experto ( Hooks y MERN )",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/1901683/3leYeOG2Qcu7PEZ1el4q_react.jpg"
    },
    {
        "folder": "sql",
        "nameCourse": "SQL de cero: Tu guía práctica con PostgreSQL",
        "imagenCourse": "https://import.cdn.thinkific.com/643563/courses/2347687/yqioXcxTsWUJ7foeQFZl_SQL-COVER-CURSO.jpg"
    }
]

export const Body = () => {
    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        async function datosApi() {
            try {
                let respu = await (await fetch(`http://192.168.128.23:5010/cursos/all`)).json();
                console.log(respu, "respuesta del servidor");
                if (!Array.isArray(respu)) throw "Error in serve";
                setCursos(respu);
            } catch (error) {
                console.log({ error: "Petition not fount", message: error });
            }
        }
        datosApi();
    }, []);

    //cusosApi()
    return <>
        <div className="grid grid-cols-6">
            <div className="col-span-6 sm:col-span-5 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-20 p-4">
                {cursos.map((element, index) =>

                    <CardCurse key={index} 
                    title={element.folder} 
                    img={element.imagenCourse} 
                    description={element.nameCourse} 
                    duration={element.duration}/>
                    
                )}
            </div>
            <div className="invisible opacity-50 sm:visible ">
                <Sidebar />
            </div>
        </div>
    </>
}