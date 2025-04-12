import { Event } from "../entity/Events";

export interface UpdateEvent {
    invoke(id: string, data: Event): Promise<Event | null>;
}
