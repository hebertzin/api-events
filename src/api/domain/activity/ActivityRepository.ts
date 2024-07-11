import { Activity, Prisma } from "@prisma/client";

export interface IActivityRepository {
  create(data: Prisma.ActivityUncheckedCreateInput): Promise<Activity>;
  findById(id: string): Promise<Activity | null>;
  findMany(user_id: string): Promise<Activity[] | null>;
  delete(id: string): Promise<void>;
  update(id: string, data: Activity): Promise<Activity | null>;
}
