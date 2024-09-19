import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { CreateUser } from "../../../application/usecases/users/create-user-use-case";
import { User } from "../../../domain/entities/user-entity";

export class CreateUserController implements Controller<Request> {
  constructor(readonly createUserUseCase: CreateUser) {}
  async handle(req: Request): Promise<HttpResponse> {
    try {
      const user = req.body as User;
      await this.createUserUseCase.invoke(user);
      return {
        statusCode: HttpStatusCode.Created,
        msg: "User created successfully",
        body: { email: user.email, name: user.name },
      };
    } catch (error) {
      return {
        statusCode: error.code,
        msg: error.message,
      };
    }
  }
}
