import { validationResult } from "express-validator";
import Book from "../models/book.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { CustomError } from "../utils/customError.js";
import { CustomResponse } from "../utils/customResponce.js";

const getAllBooks = asyncHandler(async (req, res) => {
    const books = await Book.find();
    if (!books) {
        throw new CustomError(404, "No Books Found");
    }
    res.status(200).json(new CustomResponse(200, "all books", books));
});

const createABook = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "Invalid data entered", errors.array()));
    }
    const { title, description, author, ISBN, publication } = req.body;
    const book = await Book.create({
        title,
        description,
        ISBN,
        author,
        publication,
        addedBy: req.user._id,
    });
    res.status(201).json(
        new CustomResponse(201, "book created sucessfully", book)
    );
});

const getABook = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "errors", errors.array()));
    }
    const book = await Book.findById(req.params.id);
    if (!book) {
        throw new CustomError(404, "Book not found");
    }
    res.status(200).json(new CustomResponse(200, `Details of the book`, book));
});

const editABook = asyncHandler(async (req, res) => {});

const deleteABook = asyncHandler(async (req, res) => {});

export { createABook, getAllBooks, getABook, editABook, deleteABook };
