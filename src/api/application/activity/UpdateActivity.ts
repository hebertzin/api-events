import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type UpdateActivityRequest = {
  id: string;
  name: string;
  description: string;
  location: string;
  userID: string;
};

type UpdateActivityResponse = {
  activity: UpdateActivityRequest;
};
export class UpdateActivityService
  implements Service<UpdateActivityRequest, UpdateActivityResponse>
{
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke(data: UpdateActivityRequest): Promise<UpdateActivityResponse> {
    try {
      const activity = await this.activityRepository.update(data.id, data);
      return { activity };
    } catch (error) {
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
