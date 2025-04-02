import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { ListEvents } from "../../../application/usecases/events/list";

export class ListEventsController implements Controller<Request> {
  constructor(readonly listEvents: ListEvents) { }
  async handle(req: Request): Promise<HttpResponse> {
    const { user_id } = req.params;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    try {
      const events = await this.listEvents.invoke(user_id, page, limit);
      return {
        msg: "Get a list of events sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: {
          page,
          limit,
          events,
        },
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
