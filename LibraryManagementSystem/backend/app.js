import express, { urlencoded } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const accessStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});

const app = express();

app.use(morgan("tiny", { stream: accessStream }));
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`${req.ip} -- ${req.method} -- ${req.url} -- ${new Date()}`);
    next();
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

import user from "./routes/user.routes.js";
import member from "./routes/member.routes.js";
import librarian from "./routes/librarian.routes.js";
import book from "./routes/book.routes.js";

app.use("/api/v1/users", user);
app.use("/api/v1/members", member);
app.use("/api/v1/librarian", librarian);
app.use("/api/v1/books", book);

export default app;
