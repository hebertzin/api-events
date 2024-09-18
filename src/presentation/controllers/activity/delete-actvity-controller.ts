import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/controller";
import { IDeleteActivity } from "../../../application/usecases/activity/delete-activity-use-case";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class DeleteActivityController implements Controller<Request> {
  constructor(readonly deleteActivity: IDeleteActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      await this.deleteActivity.invoke({ id });
      return {
        msg: "Activity deleted sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
