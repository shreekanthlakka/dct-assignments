import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        fullName: String,
        address: String,
        borrowedBookId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                Ref: "Book",
                from: Date,
                to: Date,
            },
        ],
    },
    { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

export default Member;
