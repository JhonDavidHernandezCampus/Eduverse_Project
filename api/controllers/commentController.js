import { conx } from "../db/conx.js";
import aumentaId from './../db/aumentaId.js';

/* 
* Ejemplo de datos a enviar 
{
    "id_video":12,
    "id_user":"ksvknsvksdvksmdv",
    "comment":"estoy probando"
}
*/


const insertComment = async (req, res) => {
    try {
        const db = await conx();
        const comments = db.collection('comments');

        let datos = req.body;
        let result = comments.insertOne({
            id_com: await aumentaId('comments', 'id_com'),
            ...datos,
            fecha_com: new Date()
        })
        if (result.insertedId) throw { status: 428, message: "Error inserting a comment" };
        res.status(200).send({ status: 200, operation: true });

    } catch (error) {
        res.sendStatus(428);
        console.log(error);
    }
}

const deleteComment = async (req, res) => {
    try {
        const db = await conx();
        const comments = db.collection('comments');

        let id_com = parseInt(req.params.id_com);
        if(isNaN(id_com)) throw "El valor debe ser entero";
        
        let result = await comments.deleteOne({id_com:id_com})
        if(result.deletedCount < 1) throw "El commentario no existe";
        res.status(200).send({status:200, operation:true});
        
    } catch (error) {
        res.status(428).send({status:428,message:error});
        console.log({status:428,message:error});
    }

}


export {
    insertComment,
    deleteComment
}
