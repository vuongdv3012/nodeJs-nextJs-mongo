import express from 'express'
import connect from "./database/database.js";
import cors from "cors";
import * as dotenv from "dotenv"
import {
  userRoutes,
} from './routes/index.js';
dotenv.config()

const app = express();
app.use(express.json())

const PORT = process.env.PORT ?? 8080;

console.log('listen', process.env.PORT);

app.use(cors());

//define routes 
app.use('/users', userRoutes)

app.listen(PORT, async function () {
  await connect();
  console.log(`Listening on ${PORT}`);
});

