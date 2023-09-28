import { body, validationResult } from "express-validator";
import { Router } from "express";

const dtoComment = Router();

/* 
* Data que valida 
{
    "id_video":12,
    "id_user":"ksvknsvksdvksmdv",
    "comment":"estoy probando"
}
*/

const contendbody = [
    body('id_video').notEmpty().withMessage("el campo id_video no puede estar vacio")
        .isNumeric().withMessage("El campo id_video debe ser un Numero"),

    body('id_user').notEmpty().withMessage("el campo id_user no puede estar vacio")
        .isString().withMessage("El campo id_user debe ser un string").escape(),

    body('comment').notEmpty().withMessage("el campo comment no puede estar vacio")
        .isString().withMessage("El campo comment debe ser un string").escape(),
];

dtoComment.use(contendbody, (req,res,next)=>{
    let error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(500).send({error:500, Message:"Error datos mal enviados"});
        console.log(error);
    }else{
        next();
    }
});


export default dtoComment;