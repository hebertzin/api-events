import { Activity } from "../entity/activity-entity";

export interface IActivityRepository {
  create(data: Activity): Promise<Activity>;
  findById(id: string): Promise<Activity | null>;
  findMany(user_id: string): Promise<Activity[] | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Activity): Promise<Activity | null>;
}
