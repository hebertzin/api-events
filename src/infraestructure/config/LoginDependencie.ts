import { AuthenticationService } from "../../application/authentication/AuthenticationService";
import { UsersRepositoryImpl } from "../db/repository/users/UsersRepositoryImpl";
import { BcryptHashService } from "../bcrypt/BcryptHashServiceImpl";
import { loggerService } from "../logger/LoggerService";
import { LoginController } from "../../presentation/controllers/authentication/LoginController";
import { JwtServiceImpl } from "../jwt/JwtServiceImpl";

const usersRepository = new UsersRepositoryImpl();

const loginService = new AuthenticationService(
  usersRepository,
  new JwtServiceImpl(),
  new BcryptHashService(),
  loggerService
);

export const authController = new LoginController(loginService);
