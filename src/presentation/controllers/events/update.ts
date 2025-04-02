import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { UpdateEvent } from "../../../application/usecases/events/update";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Event } from "../../../domain/entities/events";

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
