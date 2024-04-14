import { validationResult } from "express-validator";

import Member from "../models/members.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { CustomError } from "../utils/customError.js";
import { CustomResponse } from "../utils/customResponce.js";

const createMemberProfile = asyncHandler(async (req, res) => {
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
    const member = await Member.create({
        userId: req.user._id,
        fullName,
        address,
    });
    if (!member) {
        throw new CustomError(400, "error while creating profile");
    }
    res.status(201).json(
        new CustomResponse(201, "profile created sucessfully", member)
    );
});

const getMemberProfile = asyncHandler(async (req, res) => {
    const member = await Member.findOne({ userId: req.user._id }).populate(
        "userId"
    );
    if (!member) {
        throw new CustomError(404, "User has no profile");
    }
    res.status(200).json(new CustomResponse(200, "profile ", member));
});

const editMemberProfile = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "Bad Request", errors.array()));
    }
    const { fullName, address } = req.body;
    const member = await Member.findOneAndUpdate(
        { userId: req.user._id },
        { fullName, address },
        { new: true }
    );
    if (!member) {
        throw new CustomError(400, "failed to update profile");
    }
    res.status(200).json(
        new CustomResponse(200, "Profile Updated sucessfully", member)
    );
});

export { createMemberProfile, getMemberProfile, editMemberProfile };
