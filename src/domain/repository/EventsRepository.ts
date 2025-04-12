import { Event } from "../entity/Events";

export interface EventsRepository {
  create(data: Event): Promise<Event>;
  findById(id: string): Promise<Event | null>;
  findMany(
    user_id: string,
    page: number,
    limit: number,
  ): Promise<Event[] | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Event): Promise<Event | null>;
}
