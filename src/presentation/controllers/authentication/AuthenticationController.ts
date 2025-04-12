import { Request } from "express";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { Controller, HttpResponse } from "../../../domain/Controller";
import { Login } from "../../../domain/Authentication";
import { User } from "../../../domain/entity/Users";

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
