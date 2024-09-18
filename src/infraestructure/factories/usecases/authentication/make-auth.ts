import { AuthenticationUseCase } from "../../../../application/usecases/authentication/auth-use-case";
import { Login } from "../../../../domain/auth";
import { BcryptHashService } from "../../../bcrypt/hash";
import { UsersRepositoryImpl } from "../../../db/repository/users/UsersRepositoryImpl";
import { JwtServiceImpl } from "../../../jwt/jwt";
import { logging } from "../../../logger/logging";

export const makeAuthentication = (): Login => {
  const userRepository = new UsersRepositoryImpl();
  const jwt = new JwtServiceImpl();
  const hash = new BcryptHashService();
  return new AuthenticationUseCase(userRepository, jwt, hash, logging);
};
