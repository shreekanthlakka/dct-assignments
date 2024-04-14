import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            default: "member",
        },
        phoneNumber: { type: String },
        isVerified: { type: Boolean, default: false },
        refreshToken: String,
        accessToken: String,
        forgotPasswordToken: String,
        forgotPasswordExpiry: String,
        authenticatedAt: [Date],
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.isValidatePassword = async function (password) {
    const salt = await bcrypt.getSalt(this.password);
    const hashedPass = await bcrypt.hash(password, salt);
    return hashedPass === this.password;
};

userSchema.methods.generateRefreshToken = async function () {
    return await jwt.sign({ _id: this._id }, process.env.SECRET, {
        expiresIn: "1h",
    });
};

userSchema.methods.generateAccessToken = async function () {
    return await jwt.sign(
        {
            _id: this._id,
            role: this.role,
            email: this.email,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
    );
};

userSchema.methods.generateForgotPasswordToken = async function () {
    const token = await crypto.getRandomBytes(20).toString("hex");
    this.forgotPasswordToken = await crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

    this.forgotPasswordExpiry = Date.now() + 20 * 60 * 1000;

    return token;
};

const User = mongoose.model("User", userSchema);

export default User;
