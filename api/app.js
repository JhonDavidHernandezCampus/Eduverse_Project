import Express from "express";
import cors from 'cors';
import session from "express-session";
import passport from "passport";
// *Importes of the routers
import router_login from "./routes/[login].router.js";
import router_comment from "./routes/[comment].router.js";

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
app.use('/comment',router_comment);
app.get('/',(req,res)=>{
    res.json({server:true, message:"Server listening"});
})


app.get('/get',(req,res)=>{
    res.send("datos respondidos por consola XD")
    console.log(req.user);
})

export default app;