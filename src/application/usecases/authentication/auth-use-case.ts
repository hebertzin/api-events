import { Hash } from "../../../domain/hash";
import { Jwt } from "../../../domain/jwt";
import { Logging } from "../../../domain/logging";
import { Authentication, Login, Token } from "../../../domain/auth";
import { UserRepository } from "../../../domain/repositories/users-repository";
import { AppError, InvalidCredentials, NotFound } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/http-status";

export class AuthenticationUseCase implements Login {
  constructor(
    readonly usersRepository: UserRepository,
    readonly jwtService: Jwt,
    readonly bcrypt: Hash,
    readonly logging: Logging,
  ) {}
  async invoke(user: Authentication): Promise<Token> {
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
