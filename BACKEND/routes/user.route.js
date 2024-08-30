import express from 'express'
import { register, login, logout, getMyProfile, updateProfile, forgetPassword, resetPassword } from '../controllers/user.controller.js';
import  isAuthenticated  from '../middlewares/isAuthenticated.js';

const router = express.Router();

// Routes for Register, Login, etc.
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/updateProfile").put(isAuthenticated, updateProfile)
router.route("/forgetPassword").post(forgetPassword)
router.route("/resetPassword/:token").put(resetPassword)

export default router;