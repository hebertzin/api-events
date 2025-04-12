import { Event } from "../entity/Events";

export interface CreateEvent {
  invoke(event: Event): Promise<Event>;
}
