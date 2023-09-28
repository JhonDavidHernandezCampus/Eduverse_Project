import { insertComment, deleteComment } from "../controllers/commentController.js";
import dtoComment from "../storage/[DTO].comment.js";
import limit from "../middleware/limit.js";
import { Router } from "express";


const router_comment = Router();

router_comment.post('/', limit ,dtoComment ,insertComment);
router_comment.delete('/:id_com', limit ,deleteComment);




export default router_comment;
