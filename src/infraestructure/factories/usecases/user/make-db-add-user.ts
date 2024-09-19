import {
  CreateUser,
  CreateUserUseCase,
} from "../../../../application/usecases/users/create-user-use-case";
import { BcryptHashService } from "../../../security/bcrypt/hash";
import { UsersRepositoryImpl } from "../../../database/repositories/users/users-repository";
import { logging } from "../../../logging/logging";

export const makeDbAddUserUseCase = (): CreateUser => {
  const dbAddUser = new UsersRepositoryImpl();
  const hash = new BcryptHashService();
  const addUserUseCase = new CreateUserUseCase(dbAddUser, hash, logging);
  return addUserUseCase;
};
