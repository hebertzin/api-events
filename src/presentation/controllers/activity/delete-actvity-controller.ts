import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { DeleteActivity } from "../../../application/usecases/activity/delete-activity-use-case";

export class DeleteActivityController implements Controller {
  constructor(readonly deleteActivity: DeleteActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      await this.deleteActivity.invoke(id);
      return {
        msg: "Activity deleted sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
