import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { CreateEvent } from "../../../application/usecases/events/create";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Event } from "../../../domain/entities/events";

export class CreateEventController implements Controller<Request> {
  constructor(readonly createEvent: CreateEvent) { }
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const data = req.body as Event;
      await this.createEvent.invoke(data);
      return {
        msg: "Event Created sucessfully",
        statusCode: HttpStatusCode.Created,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
