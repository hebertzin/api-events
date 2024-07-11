import { Request, Response } from "express";
import { CreateUserService } from "../../../../application/users/CreateUserService";
import { HttpStatusCode } from "../../../utils/HttpStatusCode";
import { z } from "zod";

export const zodValidationUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
});

export class CreateUserController {
  constructor(private usersService: CreateUserService) {}

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
        .json({ msg: "Usuário criado com sucesso" });
    } catch (error) {
      return res.status(error.code).json({ msg: error.message });
    }
  }
}
