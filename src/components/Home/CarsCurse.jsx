import React from "react";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardCurse({title="NewCurso",img="./", description="descripcion del curso", duration="23 h"}) {
    return (
        <Card className="flex bg-yellow-50">
            <CardHeader className="flex-col items-start">
                <p className="text-tiny uppercase font-bold">{title}</p>
                <small className="text-default-500">{duration}</small>
                <h4 className="font-bold text-large">{description}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={img}
                    width={270}
                />
            </CardBody>
        </Card>
    );
}