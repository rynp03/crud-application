import express, { urlencoded } from "express";
import cors from "cors";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const PORT = 8000;
Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server Running Successfully On Port ${PORT}`)
);
