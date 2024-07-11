import { Activity, Prisma } from "@prisma/client";
import { prisma } from "../../client/PrismaClient";
import { IActivityRepository } from "../../../../domain/activity/ActivityRepository";

export class UsersRepositoryImpl implements IActivityRepository {
  async create(data: Prisma.ActivityUncheckedCreateInput): Promise<Activity> {
    const activity = await prisma.activity.create({
      data: {
        ...data,
      },
    });
    return activity;
  }

  async delete(id: string): Promise<void> {
    await prisma.activity.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Activity | null> {
    const activity = await prisma.activity.findUnique({ where: { id } });
    return activity;
  }

  async findMany(user_id: string): Promise<Activity[] | null> {
    const activities = await prisma.activity.findMany({
      where: {
        userID: user_id,
      },
    });
    return activities;
  }

  async update(id: string, data: Activity): Promise<Activity | null> {
    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: { ...data },
    });
    return updatedActivity;
  }
}
