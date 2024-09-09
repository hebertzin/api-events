import { Request } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../../../domain/Controller";
import { IGetActivity } from "../../../../application/activity/GetActivityService";

export const zodValidationActivitySchema = z.object({
  name: z.string(),
  description: z.string(),
  userID: z.string(),
  location: z.string(),
});

export class GetActivityController implements Controller<Request> {
  constructor(readonly listActivity: IGetActivity) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { id } = req.params;

    try {
      const activity = await this.listActivity.invoke({ id });
      return {
        msg: "Get activity sucessfully",
        statusCode: HttpStatusCode.Ok,
        body: activity,
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
