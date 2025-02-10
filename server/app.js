import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

//Routes
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);


app.get("/", (req, res) => {
  res.send("Server running...🚀");
});

const PORT = process.env.PORT;

dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...🚀🚀`);
  });
});