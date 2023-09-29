import { rateLimit } from "express-rate-limit";

const limit = rateLimit({
    windowMs:30*10000,
    max:10,
    legacyHeaders:true,
    standardHeaders:true,
    message: (req,res)=>{
        res.status(429).send({status:429, message:"Error, request limit reached"});
    }
})

export default limit;