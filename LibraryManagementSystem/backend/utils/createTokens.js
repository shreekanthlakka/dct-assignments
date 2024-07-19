import User from "../models/user.model.js";
import { asyncHandler } from "./asyncHandler.js";
import { CustomError } from "./customError.js";

const createToken = asyncHandler(async (userId, res) => {
    const user = await User.findById(userId).select(
        "+refreshToken +accessToken +authenticatedAt"
    );
    if (!user) {
        throw new CustomError(404, "User not found");
    }
    const refreshToken = await user.generateRefreshToken();
    const accessToken = await user.generateAccessToken();
    user.accessToken = accessToken;
    user.authenticatedAt = [...user.authenticatedAt, new Date().toISOString()];
    await user.save({ validateBeforeSave: false });

    const options = {
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000,
    };
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
            user,
            success: true,
            session: {
                accessToken,
                refreshToken,
            },
        });
});

export { createToken };
