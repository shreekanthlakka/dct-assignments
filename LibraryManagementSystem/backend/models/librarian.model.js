import mongoose from "mongoose";

const librarianSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        fullName: { type: String },
        address: { type: String },
    },
    { timestamps: true }
);

const Librarian = mongoose.model("Librarian", librarianSchema);

export default Librarian;
