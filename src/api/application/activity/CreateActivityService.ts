import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type CreateActivityRequest = {
  name: string;
  description: string;
  location: string;
  userID: string;
};

type CreateActivityResponse = {
  activity: CreateActivityRequest;
};
export class CreateActivityService
  implements Service<CreateActivityRequest, CreateActivityResponse>
{
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke(data: CreateActivityRequest): Promise<CreateActivityResponse> {
    try {
      const activity = await this.activityRepository.create(data);
      return { activity };
    } catch (error) {
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
