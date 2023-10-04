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

app.use(cors({
    origin: 'http://127.1.1.1:5226',
    credentials: true,
}));


// * Middleware of the aplication
app.use(router_login);
app.use('/comment', router_comment);

app.get('/get', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.cookies);
        console.log('User is authenticated');
        return res.json(req.user);
    } else {
        console.log('User is not authenticated');
        return res.status(401).send({ status: 401, session: false, message: "No authorized" });
    }
});

app.get('/sesion', (req, res) => {
    console.log("hace lo de session");
    if (req.isAuthenticated()) {
        console.log('User is logged out');
        req.logout(function(err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Error while logging out" });
            }
            return res.json({ message: "User logged out" });
        });
    } else {
        console.log('User is not authenticated');
        return res.status(401).send({ status: 401, session: false, message: "No authorized" });
    }
});

app.get('/', (req, res) => {
    res.json({ server: true, message: "Server listening" });
})


export default app; 