import { Event } from "../entity/Events";

export interface GetEvent {
    invoke(event_id: string): Promise<Event | null>;
}
