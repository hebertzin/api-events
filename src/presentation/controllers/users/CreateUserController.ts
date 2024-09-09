import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";
import { z } from "zod";
import { ICreateUserService } from "../../../domain/CreateUserService";
import { Controller, HttpResponse } from "../../../domain/Controller";

export const zodValidationUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export class CreateUserController implements Controller<Request> {
  constructor(readonly usersService: ICreateUserService) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { email, password, name } = req.body;
    try {
      await this.usersService.invoke({
        email: email,
        name: name,
        password: password,
      });

      return {
        statusCode: HttpStatusCode.Created,
        msg: "User created successfully",
        body: { email, name },
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
