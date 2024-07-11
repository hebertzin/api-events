import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type DeleteActivityRequest = {
  id: string;
};

type DeleteActivityResponse = void;
export class DeleteActivityService
  implements Service<DeleteActivityRequest, DeleteActivityResponse>
{
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke({ id }: DeleteActivityRequest): Promise<DeleteActivityResponse> {
    try {
      await this.activityRepository.delete(id);
    } catch (error) {
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
