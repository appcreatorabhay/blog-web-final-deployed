import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user_route.js"
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from 'cloudinary';
import blogRoute from "./routes/blog_route.js";
import cookieParser from "cookie-parser";
import cors from "cors"; 


dotenv.config();

const app = express()

const port = process.env.PORT;
const MONOGO_URL = process.env.MONOG_URI;
//middle ware

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  })
);



app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//console.log(MONOGO_URL)
try {
  mongoose.connect(MONOGO_URL);
  console.log("Conntected to MonogDB");
} catch (error) {
  console.log(error);
}
//defiining routes
app.use("/api/users",userRoute);
app.use("/api/blogs",blogRoute);
//CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
