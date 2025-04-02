import { Logging } from "../../../domain/logging";
import { AppError } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { IEventsRepository } from "../../../domain/repositories/events";

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
