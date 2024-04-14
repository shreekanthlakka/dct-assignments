class CustomError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.message = message;
        this.errors = errors;
        this.success = false;
        this.data = [];
    }
}

export { CustomError };
