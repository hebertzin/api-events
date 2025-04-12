import { Login } from "../../../../domain/Authentication";
import { BcryptHashService } from "../../../security/bcrypt/Hash";
import { UsersRepositoryImpl } from "../../../database/repository/users/UsersRepository";
import { JwtManager } from "../../../security/jwt/Jwt";
import { logging } from "../../../logging/Logging";
import { AuthenticationUseCase } from "../../../../application/usecases/authentication/AuthenticationUseCase";

export const makeAuthentication = (): Login => {
  const userRepository = new UsersRepositoryImpl();
  const jwt = new JwtManager();
  const hash = new BcryptHashService();
  return new AuthenticationUseCase(userRepository, jwt, hash, logging);
};
