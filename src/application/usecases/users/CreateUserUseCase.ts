import { Hash } from "../../../domain/Hash";
import { Logging } from "../../../domain/Logging";
import { UserRepository } from "../../../domain/repository/users-repository";
import { AppError, UserAlreadyExist } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";
import { User } from "../../../domain/entity/Users";

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
      const { name, email } = user;
      const passwordHashed = await this.bcrypt.hash(user.password);
      const newUser: User = {
        name,
        email,
        password: passwordHashed,
      };
      return this.usersRepository.create(newUser);
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
