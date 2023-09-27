import Express from "express";
import cors from 'cors';
import router_login from "./routes/[login].router.js";
import session from "express-session";
import passport from "passport";


const app = Express();

// ? Middleware basic

app.use(cors("http://127.1.1.1:5226"));
app.use(Express.json());
app.use(Express.text());


app.use(session({
    secret:"lo supersecrect",
    saveUninitialized:false,
    resave:false
}))

app.use(passport.initialize());
app.use(passport.session());

// * Middleware of the aplication
app.use(router_login);
app.get('/get',(req,res)=>{
    res.send("hola")
    console.log(req.user);
})


export default app;

