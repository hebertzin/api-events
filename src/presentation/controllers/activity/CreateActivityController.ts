import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { z } from "zod";
import { ICreateActivityService } from "../../../application/activity/CreateActivityService";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { Activity } from "../../../domain/Activity";
export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class CreateActivityController implements Controller<Request> {
  constructor(readonly activityService: ICreateActivityService) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const data = req.body as Activity;
      await this.activityService.invoke(data);
      return {
        msg: "Activity Created sucessfully",
        statusCode: HttpStatusCode.Created,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
