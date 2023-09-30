import { Router } from "express";
import passport  from './../middleware/[discord].passport.js';
import limit from "../middleware/limit.js";

const router_login = Router();

router_login.get('/login',limit,passport.authenticate('discord'));

router_login.get('/auth/redirect', passport.authenticate('discord', {
    successRedirect:"http://127.1.1.1:5226/dashboard",
    failureRedirect:"http://127.1.1.1:5226"
}), );

export default router_login;