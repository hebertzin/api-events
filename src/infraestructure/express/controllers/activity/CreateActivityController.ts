import { Request } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { ICreateActivityService } from "../../../../application/activity/CreateActivityService";
import { Controller, HttpResponse } from "../../../../../domain/Controller";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class CreateActivityController implements Controller<Request> {
  constructor(readonly activityService: ICreateActivityService) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { description, location, name, userID } =
      zodValidationActivitySchema.parse(req.body);
    try {
      await this.activityService.invoke({
        description,
        location,
        name,
        userID,
      });
      return {
        msg: "Activity Created sucessfully",
        statusCode: HttpStatusCode.Created,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
