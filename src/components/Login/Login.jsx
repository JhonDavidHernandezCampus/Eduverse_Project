import React from "react";
import './login.css';

/* 
* Using Taidwind
*
*
*/
import { Button } from "@nextui-org/react";

export const Login = () => {
    return <>
        <div className=" bg-black w-full h-full ">
            <Button color="primary"> Button </Button>
            <div>Text color changes based on theme</div>
        </div>
    </>
}

