import { UsersRepositoryImpl } from "../db/repository/users/UsersRepositoryImpl";
import { CreateUserService } from "../../application/users/CreateUserService";
import { CreateUserController } from "../express/controllers/users/CreateUserController";
import { BcryptHashService } from "../bcrypt/BcryptHashServiceImpl";
import { loggerService } from "../logger/LoggerService";

const usersRepository = new UsersRepositoryImpl();
const hashService = new BcryptHashService();

const createUserService = new CreateUserService(
  usersRepository,
  hashService,
  loggerService,
);

const createUserController = new CreateUserController(createUserService);

export { createUserController };
