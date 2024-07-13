import { Request } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../../domain/Controller";
import { IListActivity } from "../../../../application/activity/ListActivityService";

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
      await this.listActivity.invoke({ user_id });
      return {
        msg: "Get a list of activities sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
