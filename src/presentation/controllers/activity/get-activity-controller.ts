import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { GetActivity } from "../../../application/usecases/activity/get-activity-use-case";

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
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
