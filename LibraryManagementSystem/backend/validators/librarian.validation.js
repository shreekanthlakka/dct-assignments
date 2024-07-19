import Librarian from "../models/librarian.model.js";
import User from "../models/user.model.js";

const librarianValidationSchema = {
    userId: {
        custom: {
            options: async (value, { req }) => {
                const librarian = await Librarian.findOne({
                    userId: req.user._id,
                });
                if (librarian) {
                    throw new Error("You are already created your profile.");
                }
                return true;
            },
        },
    },
    fullName: {
        in: ["body"],
        exists: {
            errorMessage: "Full name is required.",
        },
        notEmpty: {
            errorMessage: "Full name cannot be empty.",
        },
        trim: true,
    },
    address: {
        in: ["body"],
        exists: {
            errorMessage: "Address information is required.",
        },
        notEmpty: {
            errorMessage: "address cannot be empty",
        },
    },
};

export { librarianValidationSchema };
