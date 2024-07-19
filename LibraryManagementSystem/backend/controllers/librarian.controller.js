import { validationResult } from "express-validator";
import { CustomError } from "../utils/customError.js";
import { CustomResponse } from "../utils/customResponce.js";
import Librarian from "../models/librarian.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createLibrarianProfile = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(
                new CustomError(
                    400,
                    "validation errors/bad request",
                    errors.array()
                )
            );
    }
    const { fullName, address } = req.body;
    const librarian = await Librarian.create({
        userId: req.user._id,
        fullName,
        address,
    });
    if (!librarian) {
        throw new CustomError(400, "error while creating profile");
    }
    res.status(201).json(
        new CustomResponse(201, "profile created sucessfully", librarian)
    );
});

const getLibrarianProfile = asyncHandler(async (req, res) => {
    const librarian = await Librarian.findOne({
        userId: req.user._id,
    }).populate("userId");
    if (!librarian) {
        throw new CustomError(404, "User has no profile");
    }
    res.status(200).json(new CustomResponse(200, "profile ", librarian));
});

const editLibrarianProfile = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "Bad Request", errors.array()));
    }
    const { fullName, address } = req.body;
    const librarian = await Librarian.findOneAndUpdate(
        { userId: req.user._id },
        { fullName, address },
        { new: true }
    );
    if (!librarian) {
        throw new CustomError(400, "failed to update profile");
    }
    res.status(200).json(
        new CustomResponse(200, "Profile Updated sucessfully", librarian)
    );
});

export { createLibrarianProfile, getLibrarianProfile, editLibrarianProfile };
