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

app.get('/home',(req,res)=>{
    res.json({Message:"Usuario logueado", status:200});
    console.log("estamos logeados");
});

app.use(router_login);



export default app;

