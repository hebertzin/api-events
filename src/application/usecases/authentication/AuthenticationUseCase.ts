import { Hash } from "../../../domain/Hash";
import { Jwt } from "../../../domain/Jwt";
import { Logging } from "../../../domain/Logging";
import { Authentication, Login, Token } from "../../../domain/Authentication";
import { UserRepository } from "../../../domain/repository/UsersRepository";
import { AppError, InvalidCredentials, NotFound } from "../../errors/Errors";
import { HttpStatusCode } from "../../../domain/HttpStatus";

export class AuthenticationUseCase implements Login {
  constructor(
    readonly usersRepository: UserRepository,
    readonly jwtService: Jwt,
    readonly bcrypt: Hash,
    readonly logging: Logging,
  ) {}

  public async invoke(user: Authentication): Promise<Token> {
    const existentUser = await this.usersRepository.findByEmail(user.email);
    if (!existentUser) {
      throw new NotFound(
        "User does not exist, create an account",
        HttpStatusCode.NotFound,
      );
    }
    const isValidPassword = await this.bcrypt.compare(
      user.password,
      existentUser.password,
    );
    if (!isValidPassword) {
      this.logging.warn(`User credential are invalid ${user.email}`);
      throw new InvalidCredentials(
        "Invalid credentials",
        HttpStatusCode.Unauthorized,
      );
    }
    try {
      const token = this.jwtService.sign(existentUser, { expiresIn: "1d" });
      return { token };
    } catch (error) {
      this.logging.error(
        `Some internal server error has been ocurred trying log user : ${error}`,
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
