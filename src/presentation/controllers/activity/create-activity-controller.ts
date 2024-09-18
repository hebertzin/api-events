import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { CreateActivity } from "../../../application/usecases/activity/create-activity-use-case";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Activity } from "../../../domain/entity/activity-entity";
export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class CreateActivityController implements Controller<Request> {
  constructor(readonly activityService: CreateActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const data = req.body as Activity;
      await this.activityService.invoke(data);
      return {
        msg: "Activity Created sucessfully",
        statusCode: HttpStatusCode.Created,
      };
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
