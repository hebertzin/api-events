import { Request } from "express";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { LoginService } from "../../../../../domain/LoginService";
import { Controller, HttpResponse } from "../../../../../domain/Controller";

export const zodValidationLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export class LoginController implements Controller<Request> {
  constructor(readonly loginService: LoginService) {}

  async handle(req: Request): Promise<HttpResponse> {
    const { email, password } = req.body;
    try {
      const { token } = await this.loginService.invoke({
        email: email,
        password: password,
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
