import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { DeleteActivity } from "../../../application/usecases/events/delete";

export class DeleteEventController implements Controller<Request> {
  constructor(readonly deleteEvent: DeleteActivity) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      await this.deleteEvent.invoke(id);
      return {
        msg: "Event deleted sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
