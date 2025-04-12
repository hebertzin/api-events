import { Logging } from "../../../domain/Logging";
import { AppError } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { IEventsRepository } from "../../../domain/repository/events";

export interface DeleteActivity {
  invoke(activity_id: string): Promise<void>;
}

export class DeleteEventUseCase implements DeleteActivity {
  constructor(
    readonly deleteEventRepository: IEventsRepository,
    readonly logging: Logging,
  ) {}
  async invoke(activity_id: string): Promise<void> {
    try {
      await this.deleteEventRepository.delete(activity_id);
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
