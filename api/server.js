import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adRoute from "./routes/ad.route.js";
import authRoute from "./routes/auth.route.js";
import serviceRoute from"./routes/service.route.js";
import mailRoute from './routes/mail.route.js'
import userRoute from './routes/user.route.js'
import contactRoute from './routes/contact.route.js'
import reportRoute from './routes/report.route.js'
import coverRoute from './routes/cover.route.js'
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/posts", adRoute);
app.use("/api/service", serviceRoute);
app.use("/api/mail", mailRoute);
app.use("/api/user", userRoute);
app.use("/api/report", reportRoute);
app.use("/api/cover", coverRoute);
app.use("/api/contact", contactRoute);


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running!");
});
