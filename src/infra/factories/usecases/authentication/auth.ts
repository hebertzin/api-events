import { AuthenticationUseCase } from "../../../../application/usecases/authentication/AuthUseCase";
import { Login } from "../../../../domain/auth";
import { BcryptHashService } from "../../../security/bcrypt/hash";
import { UsersRepositoryImpl } from "../../../database/repositories/users/repository";
import { JwtManager } from "../../../security/jwt/jwt";
import { logging } from "../../../logging/logging";

export const makeAuthentication = (): Login => {
  const userRepository = new UsersRepositoryImpl();
  const jwt = new JwtManager();
  const hash = new BcryptHashService();
  return new AuthenticationUseCase(userRepository, jwt, hash, logging);
};
