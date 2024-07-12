import { ICreateUserService } from "../../domain/CreateUserService";
import { HashService } from "../../domain/HashService";
import { IUsersRepository } from "../../domain/users/UsersRepository";
import { AppError, UserAlreadyExist } from "../../errors/errors";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

export type User = {
  email: string;
  name: string;
  password: string;
};

export class CreateUserService implements ICreateUserService {
  constructor(
    readonly usersRepository: IUsersRepository,
    readonly bcrypt: HashService
  ) {}

  async invoke({ name, email, password }: User): Promise<User> {
    const existentUser = await this.usersRepository.findByEmail(email);

    if (existentUser) {
      throw new UserAlreadyExist("User already exist", HttpStatusCode.Conflict);
    }

    try {
      const passwordHashed = await this.bcrypt.hash(password);

      const user = await this.usersRepository.create({
        email,
        name,
        password: passwordHashed,
      });
      return user;
    } catch (error) {
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
