import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/controller";
import { GetActivity } from "../../../application/usecases/activity/get-activity-use-case";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class GetActivityController implements Controller<Request> {
  constructor(readonly listActivity: GetActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      const activity = await this.listActivity.invoke(id);
      return {
        msg: "Get activity sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: activity,
      };
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
