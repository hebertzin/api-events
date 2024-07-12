import { Service } from "../../domain/Service";
import { AppError, InvalidCredentials, NotFound } from "../../errors/errors";
import { BcryptHashService } from "../../infraestructure/bcrypt/BcryptHashServiceImpl";
import { UsersRepositoryImpl } from "../../infraestructure/db/repository/users/UsersRepositoryImpl";
import { JwtServiceImpl } from "../../infraestructure/jwt/JwtServiceImpl";
import { HttpStatusCode } from "../../infraestructure/utils/HttpStatusCode";

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export class AuthenticationService
  implements Service<LoginRequest, LoginResponse>
{
  constructor(
    private readonly usersRepository: UsersRepositoryImpl,
    private readonly jwtService: JwtServiceImpl,
    private readonly bcrypt: BcryptHashService
  ) {}
  async invoke({ email, password }: LoginRequest): Promise<LoginResponse> {
    const existentUser = await this.usersRepository.findByEmail(email);

    if (!existentUser) {
      throw new NotFound("Usuário não encontrado", HttpStatusCode.NotFound);
    }

    const isValidPassword = await this.bcrypt.compare(
      password,
      existentUser.password
    );

    if (!isValidPassword) {
      throw new InvalidCredentials(
        "Invalid credentials",
        HttpStatusCode.Unauthorized
      );
    }

    try {
      const token = this.jwtService.sign(existentUser);
      return { token };
    } catch (error) {
      throw new AppError(
        "Internal server error",
        HttpStatusCode.InternalServerError
      );
    }
  }
}
