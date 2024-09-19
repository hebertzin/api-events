import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { ListActivity } from "../../../application/usecases/activity/list-activity-use-case";

export class ListActivityController implements Controller<Request> {
  constructor(readonly listActivity: ListActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { user_id } = req.params;
    try {
      const activities = await this.listActivity.invoke(user_id);
      return {
        msg: "Get a list of activities sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: activities,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
