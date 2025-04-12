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
    await this.bcryptValidatePassword(user.password, existentUser.password);

    try {
      const token = await this.signInToken(existentUser);
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

  private async bcryptValidatePassword(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    try {
      const isValidPassword = await this.bcrypt.compare(password, hashPassword);
      if (!isValidPassword) {
        this.logging.warn(`User credential are invalid`);

        throw new InvalidCredentials(
          "Invalid credentials",
          HttpStatusCode.Unauthorized,
        );
      }

      this.logging.info("User credentials are correct");

      return isValidPassword;
    } catch (err) {
      this.logging.info(
        "Some error has been ocurred validating user credentials",
      );

      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }

  private async signInToken(payload: {
    email: string;
    name: string;
  }): Promise<string> {
    this.logging.info(`Sign in token to user : ${payload.email}`);

    try {
      return this.jwtService.sign(payload, { expiresIn: "1d" });
    } catch (err) {
      this.logging.error(
        `Some error has been ocurred sign in token to user : ${payload.email}`,
      );

      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError,
      );
    }
  }
}
