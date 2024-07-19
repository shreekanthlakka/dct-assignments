import express from "express";
import { checkSchema, body } from "express-validator";
import { userValidationSchema } from "../validators/user.validation.js";
import {
    adminGetAllUsers,
    getLoggedInUserDetails,
    login,
    logout,
    register,
} from "../controllers/user.controller.js";
import { customRole, isLoggedIn } from "../middlewares/isLoggedIn.js";

const router = express.Router();

router.route("/register").post(checkSchema(userValidationSchema), register);
router
    .route("/login")
    .post(
        body("email").exists().notEmpty().trim().isEmail(),
        body("password").exists().notEmpty().trim(),
        login
    );
router.route("/getuser").get(isLoggedIn, getLoggedInUserDetails);
router.route("/logout").post(isLoggedIn, logout);

/**
 *
 * admin routes to be added
 */

router.route("/admin").get(isLoggedIn, customRole(["admin"]), adminGetAllUsers);

export default router;
