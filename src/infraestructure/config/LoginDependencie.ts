import { AuthenticationService } from "../../application/usecases/authentication/auth-use-case";
import { UsersRepositoryImpl } from "../db/repository/users/UsersRepositoryImpl";
import { BcryptHashService } from "../bcrypt/hash";
import { logging } from "../logger/logging";
import { LoginController } from "../../presentation/controllers/authentication/LoginController";
import { JwtServiceImpl } from "../jwt/jwt";

const usersRepository = new UsersRepositoryImpl();

const loginService = new AuthenticationService(
  usersRepository,
  new JwtServiceImpl(),
  new BcryptHashService(),
  logging,
);

export const authController = new LoginController(loginService);
