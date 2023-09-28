import passport from "passport";
import dotenv from 'dotenv';
import { conx } from './../db/conx.js';
import { Strategy } from 'passport-discord';

dotenv.config();


// ? El serializaUser y el deserializeUser es para guardar los datos del usuario
// ? y que de esta forma no se tenga que iniciar sesion siempre 

console.log("almenos se que esto se jecuta");
const host = JSON.parse(process.env.SERVER);

//* como guardamos la sesion, se ejecuta cuando nos autenticamos el parametro user que resivimos aqui es 
//* lo que retornamos en el done de la autenticacion.
passport.serializeUser((user, done) => {
    done(null, user)
});
//* esta se ejecuta cuando requiero los datos del usuario req.user me retorna lo que le coloque en la funcion done
passport.deserializeUser((user, done) => {
    done(null, user)
});

passport.use(new Strategy({
    clientID: process.env.DIS_ID,
    clientSecret: process.env.DIS_CLIENT,
    callbackURL: `http://${host.localhost}:${host.port}/auth/redirect`,
    scope: ['identify', 'guilds', 'email', 'connections']
}, async (acessToken, refreshToken, profile, done) => {
    try {
        const db = await conx();
        const user = db.collection('user');
        let result = await user.find().toArray();
        if (result[0]) {
            console.log("usuario ya existente");
        } else {
            let insert = await user.insertOne({
                id_user: profile.id,
                id_rol: 1,
                name_user: profile.username,
                servers: profile.guilds,
                email_user: profile.email,
                avatar_user:profile.avatar
            });
            console.log("Usuario agregado");
        }
        done(null, profile);
    } catch (error) {
        console.log(error);
        done(error, null);0
    }
}));