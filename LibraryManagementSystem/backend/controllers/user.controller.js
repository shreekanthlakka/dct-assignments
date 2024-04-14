import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validationResult } from "express-validator";
import { CustomError } from "../utils/customError.js";
import { CustomResponse } from "../utils/customResponce.js";
import { createToken } from "../utils/createTokens.js";

const register = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "bad request", errors.array()));
    }
    const { name, email, password, role } = req.body;
    const user = await User.create({
        name,
        email,
        password,
        role,
    });
    if (!user) {
        throw new CustomError(401, "not able to register");
    }
    res.status(201).json(
        new CustomResponse(201, "registered  successfully", user)
    );
});

const login = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(new CustomError(400, "Bad Request", errors.array()));
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new CustomError(404, "email/password  is wrong");
    }
    if (!user.isValidatePassword(password)) {
        throw new CustomError(404, "email/password  is wrong");
    }
    createToken(user._id, res);
});

const logout = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("+accessToken");
    if (!user) {
        throw new CustomError(404, "User not found!");
    }
    user.accessToken = null;
    await user.save({ validateBeforeSave: false });
    const options = {
        httpOnly: true,
        maxAge: 0,
    };
    res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken")
        .json(new CustomResponse(200, "Logged out"));
});

const getLoggedInUserDetails = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) {
        throw new CustomError(404, "User token expired / invalid token");
    }
    res.status(200).json(new CustomResponse(200, "Success", user));
});

/**
 * admin controllers
 *
 */

const adminGetAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    if (!users) {
        throw new CustomError(404, "Error while retreving the users");
    }
    res.status(200).json(new CustomResponse(200, "users details ", users));
});

export { register, login, logout, getLoggedInUserDetails, adminGetAllUsers };

//asyncHandler(async (req, res) => {});
