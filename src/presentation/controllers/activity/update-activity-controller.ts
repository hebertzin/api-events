import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { z } from "zod";
import { IUpdateActivity } from "../../../application/usecases/activity/update-activity-use-case";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { Activity } from "../../../domain/Activity";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class UpdateActivityController implements Controller<Request> {
  constructor(readonly activityService: IUpdateActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      const data = req.body as Activity;
      await this.activityService.invoke(id, data);
      return {
        msg: "Activity updated sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
