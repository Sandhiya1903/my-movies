//packages

import express from "express"; //A framework for building web applications and APIs.
import cookieParser from "cookie-parser"; //Middleware to parse cookies from incoming requests.
import dotenv from "dotenv"; //A package to load environment variables from a .env file.
import path from "path"; //A core Node.js module used for handling file paths.

//files

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
//configuration

dotenv.config();
connectDB();

const app = express();

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

//Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
