import express, { Express } from "express";
import { loggerService } from "./api/infraestructure/logger/LoggerService";
import { AppRoutes } from "./api/infraestructure/express/routes/routes";

export class ExpressApp {
  private expressApp: Express;

  constructor() {
    this.expressApp = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.expressApp.use(express.json());
  }

  private routes() {
    this.expressApp.use("/api/v1", AppRoutes);
  }

  public start(port: number) {
    return this.expressApp.listen(port, () => {
      loggerService.info(`Sever is running on por ${port}!`);
    });
  }

  public getApp(): Express {
    return this.expressApp;
  }
}
