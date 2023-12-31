import React, { useEffect } from "react";
import './login.css';

/* 
* Using Taidwind
*
*
*/
import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";


/* 
* Imported od the react-icons
**/

import { FaDiscord } from 'react-icons/fa';
import { AiFillWarning } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoApple } from 'react-icons/bi';
import logo from "./../../assets/imglogo.png";


export const Login = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const serve = JSON.parse(import.meta.env.VITE_SERVER);

    const login = async () => {
        try {
            let serverOk = await (await fetch(`http://${serve.localhost}:${serve.port}`)).json();

            if (serverOk) {
                try {
                    window.location.href = `http://${serve.localhost}:${serve.port}/login`;
                } catch (error) {
                    //console.log(error);
                }
            }
        } catch (error) {
            onOpenChange(true);
        }
        
    }
    return <>
        <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Error in the Server</ModalHeader>
                        <ModalBody className="">
                            <AiFillWarning className="w-full h-56" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        <div className="flex p-24" id="container">
            <div className="flex backdrop-blur-sm bg-white/30 w-full rounded-[40px]">
                <div className="flex flex-col justify-center items-center w-5/12 bg-black/60  rounded-l-[40px] " id="post">
                    <h1 className="text-6xl mb-20 text-gray-100">Login</h1>
                    <div className="flex flex-col w-full items-center">
                        <Button color="secondary" className="mt-7 w-7/12 text-1xl h-14 " onClick={login} > Discord <FaDiscord style={{ fontSize: '30px' }} /> </Button>
                        <Button color="default" className="mt-7 w-7/12 text-1xl   h-14 	"> Gloogle <FcGoogle style={{ fontSize: '30px' }} /> </Button>
                        <Button color="primary" className="mt-7 w-7/12 text-1xl   h-14 	"> Apple   <BiLogoApple style={{ fontSize: '30px' }} /></Button>
                    </div>
                </div>
                <div className="flex flex-col items-center w-7/12 p-6" id="login">
                    <div>
                        <Tooltip color="primary" size="lg" delay={600} showArrow={true} content="!Eduvverse La mejor plataforma gratuita de cursos de programacion¡">
                            <img src={logo} alt="" className="w-2/4 ms-[26%]" />
                        </Tooltip>
                    </div>
                    <div className="flex items-center  h-1/4 mb-[30px] w-4/4">
                        <h2 id="span" className="text-[20px] ">¡Bienvenido a nuestra plataforma de cursos de programación! 🚀 <br />
                            Encuentra los mejores cursos para tu carrera en codificación 💻. <br />
                            Únete y comienza tu viaje hacia el éxito en la programación. 🌟</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
}

