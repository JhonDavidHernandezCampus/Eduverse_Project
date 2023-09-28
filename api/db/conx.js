import { MongoClient } from "mongodb";
import Dotenv from "dotenv";
Dotenv.config();

export const conx = async ()=>{
    try {
        let credentials = JSON.parse(process.env.DB_CREDENTIALS);
        let url = `mongodb+srv://${credentials.user}:${credentials.password}@eduvverse.slos11q.mongodb.net/${credentials.db_name}`;
        let conxi = await MongoClient.connect(url);

        return conxi.db();
    } catch (error) {
        console.log({Message:"Error producido en la conexion de la base de datos.",error:error});
    }
}
