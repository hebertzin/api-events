import { Controller } from "../../../../domain/controller";
import { CreateUserController } from "../../../../presentation/controllers/users/CreateUserController";
import { makeDbAddUserUseCase } from "../../usecases/user/make-db-add-user";

export const makeAddUserController = (): Controller => {
  return new CreateUserController(makeDbAddUserUseCase());
};
