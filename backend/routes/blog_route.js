import express from 'express';

import {isAuthenticated,isAdmin} from "../middleware/authUser.js";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlogs,
  getMyBlogs,
  updateBlog,
 
} from "../Controler/blog_Controller.js";
const router=express.Router()
router.post("/create", isAuthenticated,isAdmin("admin"),createBlog);
router.delete("/delete/:id",isAuthenticated,isAdmin("admin"),deleteBlog);
router.get("/all-blogs", getAllBlogs);
router.get("/single-blog/:id", isAuthenticated, getSingleBlogs);
router.get("/my-blog", isAuthenticated, isAdmin("admin"), getMyBlogs);
router.put("/update/:id", isAuthenticated, isAdmin("admin"), updateBlog);





export default router;
