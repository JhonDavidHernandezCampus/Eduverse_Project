import React from "react";

/* 
* import of the componentes
*/
import { Header } from "./Header";
import { Body } from "./Body";

export const Home = () => {
    return <>
        <header>
            <Header />
        </header>
        <body>
            <Body />
        </body>
    </>
}