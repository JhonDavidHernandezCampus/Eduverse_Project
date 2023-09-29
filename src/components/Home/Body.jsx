import React from "react";
import CardCurse from "./CarsCurse";
import { Sidebar } from "./Sidebar";

export const Body = ()=>{
    return <>
        <div className=" flex w-full">
            <div className="flex flex-wrap justify-center w-9/12 p-3 ">
                <CardCurse />
                <CardCurse />
                <CardCurse />
                <CardCurse />
                <CardCurse />
                <CardCurse />
            </div>
            <div className="w-3/12 opacity-50">
                <Sidebar  />
            </div>
        </div>
    </>
}