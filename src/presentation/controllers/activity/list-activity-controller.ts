import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { ListActivity } from "../../../application/usecases/activity/list-activity-use-case";

export class ListActivityController implements Controller<Request> {
  constructor(readonly listActivity: ListActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { user_id } = req.params;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    try {
      const activities = await this.listActivity.invoke(user_id, page, limit);
      return {
        msg: "Get a list of activities sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: {
          page,
          limit,
          activities,
        },
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
