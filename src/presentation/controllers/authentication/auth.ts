import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Login } from "../../../domain/auth";
import { User } from "../../../domain/entities/user";

export class AuthenticationController implements Controller<Request> {
  constructor(readonly authenticationUseCase: Login) {}
  async handle(req: Request): Promise<HttpResponse> {
    const user = req.body as User;
    try {
      const { token } = await this.authenticationUseCase.invoke({
        email: user.email,
        password: user.password,
      });
      return {
        statusCode: HttpStatusCode.Ok,
        msg: "User log in",
        body: { token },
      };
    } catch (error) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
