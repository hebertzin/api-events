import { Controller } from "../../../../domain/controller";
import { CreateUserController } from "../../../../presentation/controllers/users/create";
import { makeDbAddUserUseCase } from "../../usecases/user/create";

export const makeAddUserController = (): Controller => {
  const addUserController = new CreateUserController(makeDbAddUserUseCase());
  return addUserController;
};
