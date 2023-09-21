import passport from "passport";
import dotenv from 'dotenv';
import { conx } from './../db/conx.js';
import { Strategy } from 'passport-discord';

dotenv.config();


// ? El serializaUser y el deserializeUser es para guardar los datos del usuario
// ? y que de esta forma no se tenga que iniciar sesion siempre 

console.log("almenos se que esto se jecuta");
//como guardamos la sesion y como la retornamos
passport.serializeUser((user, done)=>{
    console.log(user);
    done(null, user)
});

passport.deserializeUser((user, done)=>{
    console.log(user);
    done(null, user)
});

passport.use(new Strategy({
    clientID: process.env.DIS_ID,
    clientSecret: process.env.DIS_CLIENT,
    callbackURL: 'http://localhost:9001/auth/redirect', // Esta es la propiedad que me retorna a otra pagina una vez el usuario de aseptar
    scope: ['identify', 'guilds']
}, (acessToken, refreshToken, profile, done) => {
    try {
        console.log(acessToken);
        console.log(profile);
        done(null,profile);
    } catch (error) {
        console.log(error);
        done(error,null);

    }
}));