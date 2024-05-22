import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, commentPost, updatePost } from "../Controllers/PostController.js";


const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put("/:id/like", likePost)
router.post("/:id/commentPost", commentPost)
router.get('/:id/timeline', getTimelinePosts)

export default router