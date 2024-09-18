import { Controller } from "../../../domain/controller";
import { CreateUserController } from "../../../presentation/controllers/users/CreateUserController";
import { makeDbAddUser } from "../usecases/make-db-add-user";

export const makeAddUserController = (): Controller => {
  const addUserController = new CreateUserController(makeDbAddUser());
  return addUserController;
};
