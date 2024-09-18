import { Request } from "express";
import { HttpStatusCode } from "../../../domain/http-status";
import { z } from "zod";
import { Controller, HttpResponse } from "../../../domain/controller";
import { Login } from "../../../domain/auth";

export const zodValidationLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export class AuthenticationController implements Controller<Request> {
  constructor(readonly loginService: Login) {}
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
    } catch (error: any) {
      return { msg: error.message, statusCode: error.code };
    }
  }
}
