import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { Event } from "../../../domain/entity/Events";
import { CreateEvent } from "../../../domain/usecases/CreateEventUseCase";

export class CreateEventController implements Controller<Request> {
  constructor(readonly createEvent: CreateEvent) {}
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
