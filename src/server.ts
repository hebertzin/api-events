import { ExpressApp } from "./app";
import { config } from "dotenv";
config();

const app = new ExpressApp();

app.start(process.env.PORT as string);
