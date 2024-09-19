import { AuthenticationUseCase } from "../../application/usecases/authentication/auth-use-case";
import { UsersRepositoryImpl } from "../db/repository/users/UsersRepositoryImpl";
import { BcryptHashService } from "../bcrypt/hash";
import { logging } from "../logger/logging";
import { AuthenticationController } from "../../presentation/controllers/authentication/auth-controller";
import { JwtServiceImpl } from "../jwt/jwt";

const usersRepository = new UsersRepositoryImpl();

const loginService = new AuthenticationUseCase(
  usersRepository,
  new JwtServiceImpl(),
  new BcryptHashService(),
  logging,
);

export const authController = new AuthenticationController(loginService);
