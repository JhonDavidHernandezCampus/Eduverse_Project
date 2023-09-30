import React from "react";
import { Link } from "react-router-dom";

import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function CardCurse({ title = "NewCurso", img = "./", description = "descripcion del curso", duracion = "23 h" }) {
    return (
        <Card className="">
            <CardHeader className="flex-col items-start">
                <p className=" uppercase font-bold">{title}</p>
                <small className="text-default-500">{parseInt(((duracion/1000)/60)/60)} h</small>
                <h4 className="font-bold text-large">{description}</h4>
            </CardHeader>
            <CardBody className="flex justify-center items-center">
                <Image
                    alt="Card background"
                    src={img}
                />
                <Link to={`/cursos/${title}`}>
                    <Button href="/local" color="success" className="z-30 font-serif text-xl w-32 h-12 mt-2">
                        Ver
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
}