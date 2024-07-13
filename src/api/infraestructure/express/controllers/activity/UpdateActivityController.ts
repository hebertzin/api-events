import { Request } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { IUpdateActivity } from "../../../../application/activity/UpdateActivity";
import { Controller, HttpResponse } from "../../../../domain/Controller";

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
    const { description, location, name, userID } =
      zodValidationActivitySchema.parse(req.body);
    try {
      await this.activityService.invoke(id, {
        description,
        location,
        userID,
        name,
      });
      return {
        msg: "Activity updated sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
