import Member from "../models/members.model.js";
import User from "../models/user.model.js";

const memberValidationSchema = {
    userId: {
        custom: {
            options: async function (val, { req }) {
                const profile = await Member.findOne({ userId: req.user._id });
                if (profile) {
                    throw new Error("You already have a profile.");
                }
                return true;
            },
        },
    },
    fullName: {
        in: ["body"],
        exists: {
            errorMessage: "First name is required.",
        },
        notEmpty: {
            errorMessage: "Please provide your first name.",
        },
        trim: true,
    },

    address: {
        in: ["body"],
        exists: {
            errorMessage: "Address details are required.",
        },
        notEmpty: {
            errorMessage: "address fields should not be empty",
        },
    },
};

export { memberValidationSchema };
