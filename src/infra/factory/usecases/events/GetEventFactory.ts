import {
  GetEventUseCase,
} from "../../../../application/usecases/events/GetEventUseCase";
import { GetEvent } from "../../../../domain/usecases/GetEventUseCase";
import { EventsRepositoryImpl } from "../../../database/repository/events/EventsRepository";
import { logging } from "../../../logging/Logging";

export const makeDbGetEvent = (): GetEvent => {
  const activityRepository = new EventsRepositoryImpl();
  return new GetEventUseCase(activityRepository, logging);
};
