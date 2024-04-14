import User from "../models/user.model.js";
import { CustomError } from "../utils/customError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const isLoggedIn = asyncHandler(async (req, res, next) => {
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        throw new CustomError(400, "Invalid token");
    }
    const decode = await jwt.verify(token, process.env.SECRET);
    const user = await User.findById(decode._id);
    if (!user) {
        throw new CustomError(
            401,
            "Not authorized to perform this action ! Login first"
        );
    }
    req.user = user;
    next();
});

const customRole = (role) => {
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            return next(
                new CustomError(402, "not authorised to access this role")
            );
        }
        next();
    };
};

export { isLoggedIn, customRole };
