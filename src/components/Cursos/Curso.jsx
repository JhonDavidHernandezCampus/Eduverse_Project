import React, {useState} from "react";
import { Header } from "../Home/Header";


/* 
* Other imports
*/

export const Curso = ()=>{
    const [ curso, getCurso ] = useState();
    let ws;
    ws = new Worker('/src/workers/worker.js');
    ws.postMessage({action:"funciona el Worker claro que si papito"});

    ws.addEventListener('message', (data)=>{
        console.log(data);
    })

    

    let url = window.location.href;
    console.log(location);
    url = (url.split('/')).pop();
    console.log(url);
    

    return <>
    <Header />
    <h1>Bienvenido al super curso de</h1>
    </>
}