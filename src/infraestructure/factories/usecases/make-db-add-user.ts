import { CreateUserService } from "../../../application/users/CreateUserService";
import { ICreateUserService } from "../../../domain/CreateUserService";
import { BcryptHashService } from "../../bcrypt/BcryptHashServiceImpl";
import { UsersRepositoryImpl } from "../../db/repository/users/UsersRepositoryImpl";
import { loggerService } from "../../logger/LoggerService";

export const makeDbAddUser = (): ICreateUserService => {
  const dbAddUser = new UsersRepositoryImpl();
  const hash = new BcryptHashService();
  const addUserUseCase = new CreateUserService(dbAddUser, hash, loggerService);
  return addUserUseCase;
};
