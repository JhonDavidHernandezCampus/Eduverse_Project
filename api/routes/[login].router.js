import { Router } from "express";
import passport from "passport";
import './../middleware/[discord].passport.js';

const router_login = Router();

router_login.get('/login',passport.authenticate('discord'));

router_login.get('/auth/redirect', passport.authenticate('discord', {
    successRedirect:"/home",
    failureRedirect:"/"
}), );

export default router_login;