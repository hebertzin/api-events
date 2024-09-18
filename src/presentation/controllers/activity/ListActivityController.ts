import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { IListActivity } from "../../../application/usecases/activity/list-activity-use-case";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class ListActivityController implements Controller<Request> {
  constructor(readonly listActivity: IListActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { user_id } = req.params;
    try {
      const activities = await this.listActivity.invoke({ user_id });
      return {
        msg: "Get a list of activities sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: activities,
      };
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
