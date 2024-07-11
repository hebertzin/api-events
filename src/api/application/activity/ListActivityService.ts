import { Activity } from "@prisma/client";
import { Service } from "../../domain/Service";
import { AppError } from "../../errors/errors";
import { ActivityRepositoryImpl } from "../../infraestructure/db/repository/activity/ActivitRepositoryImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type ListActivityRequest = {
  user_id: string;
};

type ListActivityResponse = {
  activities: Activity[];
};
export class ListActivityService
  implements Service<ListActivityRequest, ListActivityResponse>
{
  constructor(private readonly activityRepository: ActivityRepositoryImpl) {}
  async invoke({
    user_id,
  }: ListActivityRequest): Promise<ListActivityResponse> {
    try {
      const activities = await this.activityRepository.findMany(user_id);
      return { activities };
    } catch (error) {
      throw new AppError(
        "Erro interno do servidor",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
