import { Activity } from "@prisma/client";
import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";
import { IActivityRepository } from "../../domain/activity/ActivityRepository";

type ListActivityParam = {
  user_id: string;
};

export class ListActivityService {
  constructor(readonly activityRepository: IActivityRepository) {}
  async invoke({ user_id }: ListActivityParam): Promise<Activity[]> {
    try {
      return await this.activityRepository.findMany(user_id);
    } catch (error) {
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
