import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type DeleteActivityParam = {
  id: string;
};

type DeleteActivityResponse = void;
export class DeleteActivityService implements Service<DeleteActivityParam> {
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke({ id }: DeleteActivityParam): Promise<DeleteActivityResponse> {
    try {
      await this.activityRepository.delete(id);
    } catch (error) {
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
