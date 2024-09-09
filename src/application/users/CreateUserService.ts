import { ICreateUserService } from "../../domain/CreateUserService";
import { HashService } from "../../domain/HashService";
import { ILogger } from "../../domain/Logger";
import { IUsersRepository } from "../../domain/users/UsersRepository";
import { AppError, UserAlreadyExist } from "../errors/errors";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";
import { Users } from "../../domain/Users";

export class CreateUserService implements ICreateUserService {
  constructor(
    readonly usersRepository: IUsersRepository,
    readonly bcrypt: HashService,
    readonly logger: ILogger,
  ) {}

  async invoke(user: Users): Promise<Users> {
    const existentUser = await this.usersRepository.findByEmail(user.email);

    if (existentUser) {
      this.logger.warn(`User ${existentUser.email} already exist in database`);
      throw new UserAlreadyExist("User already exist", HttpStatusCode.Conflict);
    }

    try {
      const passwordHashed = await this.bcrypt.hash(user.password);
      return await this.usersRepository.create({
        email: user.email,
        name: user.name,
        password: passwordHashed,
      });
    } catch (error) {
      this.logger.error(
        `Some Internal server error has been ocurred trying create a new user : ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
