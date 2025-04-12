import { Controller } from "../../../../domain/Controller";
import { CreateUserController } from "../../../../presentation/controllers/users/CreateUserController";
import { makeDbAddUserUseCase } from "../../usecases/user/CreateUserFactory";

export const makeAddUserController = (): Controller => {
  const addUserController = new CreateUserController(makeDbAddUserUseCase());
  return addUserController;
};
