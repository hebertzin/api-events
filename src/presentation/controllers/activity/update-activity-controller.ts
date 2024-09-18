import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { UpdateActivity } from "../../../application/usecases/activity/update-activity-use-case";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Activity } from "../../../domain/entity/activity-entity";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class UpdateActivityController implements Controller<Request> {
  constructor(readonly activityService: UpdateActivity) {}
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
