import { Activity, Prisma } from "@prisma/client";
import { prisma } from "../../orm/prisma-client";
import { IActivityRepository } from "../../../../domain/repositories/activity-repository";

export class ActivityRepositoryImpl implements IActivityRepository {
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

  async findMany(
    user_id: string,
    page: number,
    limit: number
  ): Promise<Activity[] | null> {
    const skip = (page - 1) * limit;
    const activities = await prisma.activity.findMany({
      where: {
        userID: user_id,
      },
      skip,
      take: limit,
    });
    return activities;
  }

  async update(
    id: string,
    data: Partial<Omit<Activity, "createdAt" | "updatedAt">>
  ): Promise<Activity | null> {
    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: { ...data },
    });
    return updatedActivity;
  }
}
