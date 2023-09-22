import app from "./app.js";
import Dotenv from "dotenv";

Dotenv.config();


const serve = () => {
    try {
        let ports = JSON.parse(process.env.SERVER)
        let config = {
            localhost: ports.localhost,
            port: ports.port
        }

        app.listen(config, () => {
            console.log(`http://${config.localhost}:${config.port}`);
        })
    } catch (error) {
        console.log("Error in the server init")
    }
}

serve();