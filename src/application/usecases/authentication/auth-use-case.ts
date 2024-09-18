import { HashService } from "../../../domain/HashService";
import { JwtService } from "../../../domain/JwtService";
import { ILogger } from "../../../domain/Logger";
import { LoginParams, LoginService, Token } from "../../../domain/LoginService";
import { IUsersRepository } from "../../../domain/users/UsersRepository";
import { AppError, InvalidCredentials, NotFound } from "../../errors/errors";
import { HttpStatusCode } from "../../../domain/HttpStatusCode";

export class AuthenticationService implements LoginService {
  constructor(
    readonly usersRepository: IUsersRepository,
    readonly jwtService: JwtService,
    readonly bcrypt: HashService,
    readonly logger: ILogger
  ) {}
  async invoke(user: LoginParams): Promise<Token> {
    const existentUser = await this.usersRepository.findByEmail(user.email);
    if (!existentUser) {
      throw new NotFound("User not found", HttpStatusCode.NotFound);
    }
    const isValidPassword = await this.bcrypt.compare(
      user.password,
      existentUser.password
    );
    if (!isValidPassword) {
      this.logger.warn(`User credential are invalid ${user.email}`);
      throw new InvalidCredentials(
        "Invalid credentials",
        HttpStatusCode.Unauthorized
      );
    }
    try {
      const token = this.jwtService.sign(existentUser, { expiresIn: "1d" });
      return { token };
    } catch (error) {
      this.logger.error(
        `Some internal server error has been ocurred trying log user : ${error}`
      );
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
