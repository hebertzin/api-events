import {
  CreateUser,
  CreateUserUseCase,
} from "../../../../application/usecases/users/create-user-use-case";
import { BcryptHashService } from "../../../bcrypt/hash";
import { UsersRepositoryImpl } from "../../../db/repository/users/UsersRepositoryImpl";
import { logging } from "../../../logger/logging";

export const makeDbAddUserUseCase = (): CreateUser => {
  const dbAddUser = new UsersRepositoryImpl();
  const hash = new BcryptHashService();
  const addUserUseCase = new CreateUserUseCase(dbAddUser, hash, logging);
  return addUserUseCase;
};
