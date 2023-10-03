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
    const [video, getVideo] = useState("");

    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };
    let ws;

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
        console.log(`http://192.168.128.23:5010/cursos/play?course=${url}&seccion=${seccion}&video=${video}`);

    }
    return <>
        <Header />
        <div className="p-2">
            {(curso !== undefined) ? (
                <div className="grid grid-rows-3 grid-cols-3 gap-2 h-[850px]">
                    <div className="col-span-2 row-span-2">
                        {(video != undefined) ? (
                            <video
                                autoPlay
                                muted
                                className="w-[1000px] h-full"
                                src={`http://192.168.128.23:5010/cursos/play?course=${url}&seccion=${seccion}&video=${video}`}
                                controls
                            />
                        ) : (
                            <Card className="w-full h-full space-y-5" radius="2xl">
                                <Skeleton className=" h-full rounded-lg">
                                    <div className="h-24 rounded-lg bg-secondary"></div>
                                </Skeleton>
                            </Card>
                        )}
                    </div>
                    <div className="col-span-2 row-span-1">
                        <div>
                            <h1>{curso.nameCourse}</h1>
                            <Accordion variant="shadow">
                                {curso.videos.map((seccion, index) => {
                                    return (<AccordionItem key={index + 1} aria-label="Accordion 1" title={seccion.sectionName}>
                                        {seccion.videos.map((info, i) => {
                                            return (
                                                <div key={`${i}.2`} className="ml-10 cursor-pointer">
                                                    <span onClick={() => AsignarVideo(index + 1, info.Titulo)}>{info.Titulo}</span>
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
                <Progress className="ml-[250px] mt-[400px] w-[600px]" size="lg" aria-label="Loading..." value={89}/>
            )}

        </div>
    </>
}
