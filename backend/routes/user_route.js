import express from 'express';
import { login, logout, register } from '../Controler/user_controler.js';
import { isAuthenticated } from "../middleware/authUser.js";
import {
  getAdmins,
  getMyProfile,

} from "../Controler/user_controler.js";
const router=express.Router()
router.post("/register",register)
router.post("/login",login);
router.get("/logout", isAuthenticated,logout);
router.get("/my-profile", isAuthenticated, getMyProfile);
router.get("/admins", getAdmins);


export default router;
