import { Request, Response } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { ICreateUserService } from "../../../../domain/CreateUserService";
import { Controller, HttpResponse } from "../../../../domain/Controller";

export const zodValidationUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export class CreateUserController implements Controller<Request> {
  constructor(readonly usersService: ICreateUserService) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { email, password, name } = zodValidationUserSchema.parse(req.body);
    try {
      await this.usersService.invoke({
        email: email,
        name: name,
        password: password,
      });

      return {
        statusCode: HttpStatusCode.Ok,
        msg: "User created successfully",
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
