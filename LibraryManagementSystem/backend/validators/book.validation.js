const bookValidationSchema = {
    title: {
        in: ["body"],
        exists: {
            errorMessage: "Title is required",
        },
        notEmpty: {
            errorMessage: "Title cannot be empty",
        },
        trim: true,
    },
    description: {
        in: ["body"],
        exists: {
            errorMessage: "Description is required",
        },
        notEmpty: {
            errorMessage: "Description cannot be empty",
        },
        trim: true,
    },
    author: {
        in: ["body"],
        exists: {
            errorMessage: "author is required",
        },
        notEmpty: {
            errorMessage: "author cannot be empty",
        },
        trim: true,
    },
    ISBN: {
        in: ["body"],
        exists: {
            errorMessage: "ISBN is required",
        },
        notEmpty: {
            errorMessage: "ISBN cannot be empty",
        },
        trim: true,
        // isISBN: {
        //     options: "13",
        //     errorMessage: "Invalid ISBN number",
        // },
    },
    publication: {
        in: ["body"],
        exists: {
            errorMessage: "Publication is required",
        },
        notEmpty: {
            errorMessage: "Publication cannot be empty",
        },
        trim: true,
    },
};

export { bookValidationSchema };
