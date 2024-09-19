import { Hash } from "../../../domain/hash";
import { Logging } from "../../../domain/logging";
import { UserRepository } from "../../../domain/users/UsersRepository";
import { AppError, UserAlreadyExist } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";
import { User } from "../../../domain/entities/user-entity";

export interface CreateUser {
  invoke(data: User): Promise<User>;
}

export class CreateUserUseCase implements CreateUser {
  constructor(
    readonly usersRepository: UserRepository,
    readonly bcrypt: Hash,
    readonly logging: Logging,
  ) {}
  async invoke(user: User): Promise<User> {
    const existentUser = await this.usersRepository.findByEmail(user.email);
    if (existentUser) {
      this.logging.warn(`User ${existentUser.email} already exist in database`);
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
      this.logging.error(
        `Some Internal server error has been ocurred trying create a new user : ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
