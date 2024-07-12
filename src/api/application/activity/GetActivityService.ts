import { Activity } from "@prisma/client";
import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type GetActivityParam = {
  id: string;
};

export class GetActivityService implements Service<GetActivityParam> {
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke({ id }: GetActivityParam): Promise<GetActivityParam> {
    try {
      return await this.activityRepository.findById(id);
    } catch (error) {
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
