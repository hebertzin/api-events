import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { IDeleteActivity } from "../../../application/activity/DeleteActivity";

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
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
