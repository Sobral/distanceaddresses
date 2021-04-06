import express from "express";
import routes from "./routes";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.use(express.json());
app.use(routes);

export default app;
