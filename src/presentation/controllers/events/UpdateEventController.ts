import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { Event } from "../../../domain/entity/Events";
import { UpdateEvent } from "../../../domain/usecases/UpdateEvent";

export class UpdateEventController implements Controller<Request> {
  constructor(readonly updateEvent: UpdateEvent) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      const data = req.body as Event;
      await this.updateEvent.invoke(id, data);
      return {
        msg: "Event updated sucessfully",
        statusCode: HttpStatusCode.Ok,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
