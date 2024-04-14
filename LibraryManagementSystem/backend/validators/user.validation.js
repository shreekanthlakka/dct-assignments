import User from "../models/user.model.js";

const userValidationSchema = {
    name: {
        in: ["body"],
        exists: {
            errorMessage: "Name is required",
        },
        notEmpty: {
            errorMessage: "Name cannot be empty",
        },
        trim: true,
    },
    email: {
        in: ["body"],
        exists: {
            errorMessage: "email is required",
        },
        notEmpty: {
            errorMessage: "email cannot be empty",
        },
        trim: true,
        custom: {
            options: async function (val) {
                const user = await User.findOne({ email: val });
                if (user) {
                    throw new Error("Email already registered");
                }
                return true;
            },
        },
    },
    password: {
        in: ["body"],
        exists: {
            errorMessage: "password is required",
        },
        notEmpty: {
            errorMessage: "password cannot be empty",
        },
    },
    phoneNumber: {
        in: ["body"],
        exists: {
            errorMessage: "Phone number is required.",
        },
        notEmpty: {
            errorMessage: "Please provide your phone number.",
        },
        custom: {
            options: async function (val) {
                const user = await User.findOne({ phoneNumber: val });
                if (user) {
                    throw new Error(`This phone number has been registered.`);
                }
                return true;
            },
        },
        isMobilePhone: {
            option: "en-IN",
            errorMessage: "Invalid mobile number format.",
        },
    },
    role: {
        in: ["body"],
        exists: {
            errorMessage: "role must be provided",
        },
        notEmpty: {
            errorMessage: "Role cannot be empty",
        },
        custom: {
            options: async function (val) {
                if (!["member", "librarian"].includes(val)) {
                    throw new Error(
                        "Invalid Role ! choose  from  member or librarian "
                    );
                }
                return true;
            },
        },
    },
};

export { userValidationSchema };
