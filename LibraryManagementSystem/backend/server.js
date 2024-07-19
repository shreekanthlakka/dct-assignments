import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectWithDB } from "./database/db.js";

connectWithDB();

const server = app.listen(process.env.PORT, () =>
    console.log(`server is up and running on port ${process.env.PORT}`)
);

process.on("unhandledRejection", (err) => {
    console.log("unhandledRejection shutting down");
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});

process.on("SIGTERM", () => {
    console.log("Received SIGTERM signal.");
    server.close(() => console.log("Server closed"));
});
