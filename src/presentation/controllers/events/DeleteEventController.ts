import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { DeleteEvent } from "../../../domain/usecases/DeleteEventUseCase";

export class DeleteEventController implements Controller<Request> {
  constructor(readonly deleteEvent: DeleteEvent) {}
  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;
    try {
      await this.deleteEvent.invoke(id);
      return {
        msg: "Event deleted sucessfully",
        statusCode: HttpStatusCode.NoContent,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
