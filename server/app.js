import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 4000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.send("Server running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
