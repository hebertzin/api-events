import { UsersRepositoryImpl } from "../db/repository/users/UsersRepositoryImpl";
import { CreateUserService } from "../../application/usecases/users/create-user-use-case";
import { CreateUserController } from "../../presentation/controllers/users/CreateUserController";
import { BcryptHashService } from "../bcrypt/hash";
import { loggerService } from "../logger/logging";

const usersRepository = new UsersRepositoryImpl();
const hashService = new BcryptHashService();

const createUserService = new CreateUserService(
  usersRepository,
  hashService,
  loggerService
);

const createUserController = new CreateUserController(createUserService);

export { createUserController };
