import { Request, Response } from "express";
import { CreateUserService } from "../../../../application/users/CreateUserService";

export class CreateUserController {
  constructor(private usersService: CreateUserService) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.usersService.invoke({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      });
      return res.status(201).json({ msg: "User created" });
    } catch (error) {
      return res.status(500).json({ msg: "Internal server error" });
    }
  }
}
