import { Event } from "../entity/Events";

export interface ListEvents {
    invoke(
        user_id: string,
        page?: number,
        limit?: number,
    ): Promise<Event[] | null>;
}
