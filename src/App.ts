import express, { Express } from "express";
import { logging } from "./infra/logging/Logging";
import { router } from "./presentation/routes/routes";
import cors from "cors";

export class ExpressApp {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(
      cors({
        origin: process.env.ORIGIN,
      }),
    );
  }

  private routes() {
    this.expressApp.use("/api/v1", router);
  }

  public start(port: number | string) {
    return this.expressApp.listen(port, () => {
      logging.info(`Server is running on port ${port}!`);
    });
  }

  public getApp(): Express {
    return this.expressApp;
  }
}
