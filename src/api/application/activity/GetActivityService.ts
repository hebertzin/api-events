import { Activity } from "@prisma/client";
import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type GetActivityRequest = {
  id: string;
};

type GetActivityResponse = {
  activity: GetActivityRequest;
};
export class GetActivityService
  implements Service<GetActivityRequest, GetActivityResponse>
{
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke({ id }: GetActivityRequest): Promise<GetActivityResponse> {
    try {
      const activity = await this.activityRepository.findById(id);
      return { activity };
    } catch (error) {
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
