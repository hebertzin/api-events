import { prisma } from "../../orm/Client";
import { IEventsRepository } from "../../../../domain/repository/events";
import { Events, Prisma } from "@prisma/client";

export class EventsRepositoryImpl implements IEventsRepository {
  async create(data: Prisma.EventsUncheckedCreateInput): Promise<Events> {
    const events = await prisma.events.create({
      data: {
        ...data,
      },
    });
    return events;
  }

  async delete(id: string): Promise<void> {
    await prisma.events.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Events | null> {
    const events = await prisma.events.findUnique({ where: { id } });
    return events;
  }

  async findMany(
    user_id: string,
    page: number,
    limit: number,
  ): Promise<Events[] | null> {
    const skip = (page - 1) * limit;
    const activities = await prisma.events.findMany({
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
    data: Partial<Omit<Events, "createdAt" | "updatedAt">>,
  ): Promise<Events | null> {
    const updatedevents = await prisma.events.update({
      where: { id },
      data: { ...data },
    });
    return updatedevents;
  }
}
