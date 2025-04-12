import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { GetEvent } from "../../../application/usecases/events/GetEventUseCase";

export class GetEventController implements Controller<Request> {
  constructor(readonly getEvent: GetEvent) { }
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      const event = await this.getEvent.invoke(id);
      return {
        msg: "Get event sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: event,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
