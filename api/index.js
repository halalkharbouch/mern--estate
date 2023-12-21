import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json())

app.use('/api/user', userRoter)
app.use('/api/auth', authRouter)

app.listen(3000, () => console.log("Server is running on port 3000"));
