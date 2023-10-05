import React, { useEffect, useState } from "react";
import { Header } from "../Home/Header";
import { Comment } from "./Comment";

/* 
* Other imports
*/
import { Progress, Card, Skeleton, Button, Accordion, AccordionItem } from "@nextui-org/react";

export const Curso = () => {
    const [curso, getCurso] = useState();
    const [seccion, getSeccion] = useState(1);
    const [video, getVideo] = useState();
    let ws;

    const clouster = JSON.parse(import.meta.env.VITE_CLOUSTER);


    let url = (window.location.href.split('/')).pop();

    useEffect(() => {
        ws = new Worker('/src/workers/worker.js');
        ws.postMessage({ data: { url: url }, function: "getVideos" });

        ws.addEventListener('message', (data) => {
            getCurso(data.data);
            // console.log(curso);
        })

    }, []);

    const AsignarVideo = (seccionParametro, titulo) => {
        console.log(seccionParametro, titulo);
        getSeccion(seccionParametro);
        getVideo(titulo);
        console.log(`http://${clouster.localhost}:${clouster.port}/cursos/play?course=${url}&seccion=${seccion}&video=${video}`);

    }
    return <>
        <Header />
        <div className="p-2 " >
            {(curso !== undefined) ? (
                <div className="grid grid-rows-3 grid-cols-3 gap-2 h-[850px]">
                    <div className="col-span-2 row-span-2 ml-20">
                        {(video != undefined) ? (
                            <video
                                autoPlay
                                className="w-[1000px] h-full ml-5"
                                src={`http://${clouster.localhost}:${clouster.port}/cursos/play?course=${url}&seccion=${seccion}&video=${video}`}
                                controls
                            />
                        ) : (
                            <video
                                autoPlay
                                className="w-[1000px] h-full"
                                src={`http://${clouster.localhost}:${clouster.port}/cursos/play?course=${url}&seccion=1&video=${curso.videos[0].videos[0].video}`}
                                controls
                            />
                        )}
                    </div>
                    <div className="col-span-2 row-span-1">
                        <p className="font-sans text-3xl font-semibold ml-24">{curso.nameCourse}</p>
                        <div className="overflow-y-scroll h-[250px] scrollbar-thumb-indigo-500 scrollbar-track-gray-300">
                            <Accordion variant="shadow">
                                {curso.videos.map((seccion, index) => {
                                    return (<AccordionItem key={index + 1} aria-label="Accordion 1" title={seccion.sectionName}>
                                        {seccion.videos.map((info, i) => {
                                            return (
                                                <div key={`${i}.2`} className="ml-10 cursor-pointer">
                                                    <span onClick={() => AsignarVideo(index + 1, info.video)}>{info.Titulo}</span>
                                                </div>
                                            )
                                        })}
                                    </AccordionItem>)
                                })}
                            </Accordion>
                        </div>
                    </div>

                    <div className="row-start-1 col-start-3 row-span-3 ">
                        <Comment />
                    </div>
                </div>
            ) : (
                <Progress className="ml-[250px] mt-[400px] w-[600px]" size="lg" aria-label="Loading..." value={89} />
            )}

        </div>
    </>
}
