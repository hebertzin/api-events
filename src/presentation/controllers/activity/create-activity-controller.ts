import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { CreateActivity } from "../../../application/usecases/activity/create-activity-use-case";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Activity } from "../../../domain/entities/activity-entity";

export class CreateActivityController implements Controller {
  constructor(readonly addActivity: CreateActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const data = req.body as Activity;
      await this.addActivity.invoke(data);
      return {
        msg: "Activity Created sucessfully",
        statusCode: HttpStatusCode.Created,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
