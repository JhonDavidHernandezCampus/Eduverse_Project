import Express from "express";
import cors from 'cors';
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
// *Importes of the routers
import router_login from "./routes/[login].router.js";
import router_comment from "./routes/[comment].router.js";

const app = Express();

// ? Middleware basic

app.use(cors({
    origin: 'http://127.1.1.1:5226',
    credentials: true,
}));
app.use(Express.json());
app.use(Express.text());
app.use(cookieParser());

app.use(session({
    secret: "lo supersecrect",
    saveUninitialized: false,
    resave: false,
    cookie: {
        httpOnly: false,
    },
}))

app.use(passport.initialize());
app.use(passport.session());

// * Middleware of the aplication
app.use(router_login);
app.use('/comment', router_comment);

app.get('/get', (req, res) => {
    console.log(req.isAuthenticated(true));
    console.log(req.user);
    if (req.isAuthenticated()) {
        console.log("asdasdsa")
        return res.json(req.user)
    } else {
        return res.status(401).send({ status: 401, message: "No authorized" })
    }
})

app.get('/', (req, res) => {
    res.json({ server: true, message: "Server listening" });
})


export default app;