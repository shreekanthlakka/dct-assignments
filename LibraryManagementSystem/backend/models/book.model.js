import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        author: String,
        ISBN: String,
        publication: String,
        status: {
            type: String,
            enum: ["available", "borrowed", "overdue"],
            default: "available",
        }, // available | borrowed | overdue
        stock: {
            type: Number,
            default: 1,
        },
        addedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        borrowedHistory: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Member",
                },
                from: Date,
                to: Date,
            },
        ],
    },
    { timestamps: true }
);

//some methods to update the status of the books

bookSchema.methods.borrowBook = function () {
    if (this.status === "available") {
        this.status = "borrowed";
        return true;
    } else {
        return false;
    }
};

bookSchema.methods.isAvailable = function () {
    return this.status === "available" ? true : false;
};

bookSchema.methods.isOverDue = function (currentDate) {};

bookSchema.methods.returnBook = function () {
    const now = new Date();
};

const Book = mongoose.model("Book", bookSchema);

export default Book;
