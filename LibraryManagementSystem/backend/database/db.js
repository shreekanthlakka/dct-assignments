import mongoose from "mongoose";

const connectWithDB = () => {
    mongoose
        .connect(process.env.URI)
        .then(() => {
            console.log(`MongoDB connected sucessfully`);
        })
        .catch((err) => {
            console.log(`Error connecting to MongoDB: ${err}`);
            process.exit(1);
        });
};

export { connectWithDB };
