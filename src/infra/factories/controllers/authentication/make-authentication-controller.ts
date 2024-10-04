import { Controller } from "../../../../domain/controller";
import { AuthenticationController } from "../../../../presentation/controllers/authentication/auth-controller";
import { makeAuthentication } from "../../usecases/authentication/make-auth";

export const makeAuthenticationController = (): Controller => {
  return new AuthenticationController(makeAuthentication());
};
