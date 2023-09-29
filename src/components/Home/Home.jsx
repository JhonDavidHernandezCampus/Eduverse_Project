import React from "react";
import video from './../../assets/fondo-en-bucle-4k-túnel-de-neón-3d-fondo-en-bucle-4k-túnel-de-neón-3d.mp4';
import video2 from './../../assets/png-alpha-looping-animación-abstracta-errática-png-alpha-looping-animación-abstracta-errática.mp4';

/* 
* import of the componentes
*/
import { Header } from "./Header";
import { Body } from "./Body";

const videoStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: "-1",
};

export const Home = () => {
    return <>
        <div>
            <Header />
        </div>
        <div>
            <video
                id="background-video"
                src={video2}
                autoPlay
                loop
                muted
                style={videoStyle}
                className="blur"
            />
            <Body />
        </div>
    </>
}