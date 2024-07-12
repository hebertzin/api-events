import { Request, Response } from "express";
import { CreateUserService } from "../../../../application/users/CreateUserService";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";
import { ICreateUserService } from "../../../../domain/CreateUserService";

export const zodValidationUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export class CreateUserController {
  constructor(readonly usersService: ICreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password, name } = zodValidationUserSchema.parse(req.body);
    try {
      await this.usersService.invoke({
        email: email,
        name: name,
        password: password,
      });
      return res
        .status(HttpStatusCode.Created)
        .json({ msg: "User created successfully" });
    } catch (error) {
      return res.status(error.code).json({ msg: error.message });
    }
  }
}
