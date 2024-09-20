import { Activity } from "../entities/activity-entity";

export interface IActivityRepository {
  create(data: Activity): Promise<Activity>;
  findById(id: string): Promise<Activity | null>;
  findMany(
    user_id: string,
    page: number,
    limit: number,
  ): Promise<Activity[] | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Activity): Promise<Activity | null>;
}
