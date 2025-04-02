import { Controller } from "../../../../domain/controller";
import { AuthenticationController } from "../../../../presentation/controllers/authentication/auth";
import { makeAuthentication } from "../../usecases/authentication/auth";

export const makeAuthenticationController = (): Controller => {
  return new AuthenticationController(makeAuthentication());
};
