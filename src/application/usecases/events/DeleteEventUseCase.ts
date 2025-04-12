import { Logging } from "../../../domain/Logging";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { EventsRepository } from "../../../domain/repository/EventsRepository";
import { DeleteEvent } from "../../../domain/usecases/DeleteEventUseCase";

export class DeleteEventUseCase implements DeleteEvent {
  constructor(
    readonly deleteEventRepository: EventsRepository,
    readonly logging: Logging,
  ) {}

  public async invoke(event_id: string): Promise<void> {
    try {
      this.logging.warn(
        `[DeleteEventUseCase] deleting event with id ${event_id}`,
      );

      await this.deleteEventRepository.delete(event_id);
    } catch (error) {
      this.logging.error(
        `Some error has been ocurred trying delete a new event ${error}`,
      );

      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
