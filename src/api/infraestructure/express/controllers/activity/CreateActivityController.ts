import { Request, Response } from "express";
import { CreateUserService } from "../../../../application/users/CreateUserService";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { CreateActivityService } from "../../../../application/activity/CreateActivityService";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class CreateActivityController {
  constructor(private readonly activityService: CreateActivityService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { description, location, name, userID } =
      zodValidationActivitySchema.parse(req.body);
    try {
      await this.activityService.invoke({
        description,
        location,
        name,
        userID,
      });
      return res
        .status(HttpStatusCode.Created)
        .json({ msg: "Atividade registrada com sucesso" });
    } catch (error) {
      return res.status(error.code).json({ msg: error.message });
    }
  }
}
