import express from "express";
import { checkSchema, param } from "express-validator";

import {
    createABook,
    deleteABook,
    editABook,
    getABook,
    getAllBooks,
} from "../controllers/book.controller.js";
import { customRole, isLoggedIn } from "../middlewares/isLoggedIn.js";
import { bookValidationSchema } from "../validators/book.validation.js";
const router = express.Router();

router
    .route("/")
    .get(getAllBooks)
    .post(
        isLoggedIn,
        customRole(["librarian"]),
        checkSchema(bookValidationSchema),
        createABook
    );

router
    .route("/:id")
    .get(
        isLoggedIn,
        customRole(["librarian", "member"]),
        param("id")
            .exists()
            .notEmpty()
            .isMongoId()
            .withMessage("Invalid MongoId"),
        getABook
    )
    .put(
        isLoggedIn,
        customRole(["librarian"]),
        param("id")
            .exists()
            .notEmpty()
            .isMongoId()
            .withMessage("Invalid MongoId"),
        editABook
    )
    .delete(
        isLoggedIn,
        customRole(["librarian"]),
        param("id")
            .exists()
            .notEmpty()
            .isMongoId()
            .withMessage("Invalid MongoId"),
        deleteABook
    );

export default router;
