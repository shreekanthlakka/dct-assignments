import express from "express";
import { checkSchema } from "express-validator";
import {
    createMemberProfile,
    editMemberProfile,
    getMemberProfile,
} from "../controllers/member.controller.js";
import { customRole, isLoggedIn } from "../middlewares/isLoggedIn.js";
import { memberValidationSchema } from "../validators/member.validation.js";

const router = express.Router();

router
    .route("/")
    .post(
        isLoggedIn,
        customRole(["member"]),
        checkSchema(memberValidationSchema),
        createMemberProfile
    )
    .get(isLoggedIn, customRole(["member"]), getMemberProfile)
    .put(isLoggedIn, customRole(["member"]), editMemberProfile);

export default router;
