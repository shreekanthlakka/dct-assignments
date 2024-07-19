import express from "express";
import { checkSchema } from "express-validator";
import {
    createLibrarianProfile,
    editLibrarianProfile,
    getLibrarianProfile,
} from "../controllers/librarian.controller.js";
import { customRole, isLoggedIn } from "../middlewares/isLoggedIn.js";
import { librarianValidationSchema } from "../validators/librarian.validation.js";

const router = express.Router();
router
    .route("/")
    .post(
        isLoggedIn,
        customRole(["librarian"]),
        checkSchema(librarianValidationSchema),
        createLibrarianProfile
    )
    .get(isLoggedIn, customRole(["librarian"]), getLibrarianProfile)
    .put(isLoggedIn, customRole(["librarian"]), editLibrarianProfile);

export default router;
