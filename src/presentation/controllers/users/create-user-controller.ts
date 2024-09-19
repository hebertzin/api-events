import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/controller";
import { CreateUser } from "../../../application/usecases/users/create-user-use-case";

export const zodValidationUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export class CreateUserController implements Controller<Request> {
  constructor(readonly createUserUseCase: CreateUser) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { email, password, name } = req.body;
    try {
      await this.createUserUseCase.invoke({
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
      return {
        statusCode: error.code,
        msg: error.message,
      };
    }
  }
}
