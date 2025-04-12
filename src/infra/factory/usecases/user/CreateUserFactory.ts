import {
  CreateUser,
  CreateUserUseCase,
} from "../../../../application/usecases/users/CreateUserUseCase";
import { BcryptHashService } from "../../../security/bcrypt/Hash";
import { UsersRepositoryImpl } from "../../../database/repository/users/UsersRepository";
import { logging } from "../../../logging/Logging";

export const makeDbAddUserUseCase = (): CreateUser => {
  const dbAddUser = new UsersRepositoryImpl();
  const hash = new BcryptHashService();
  const addUserUseCase = new CreateUserUseCase(dbAddUser, hash, logging);
  return addUserUseCase;
};
