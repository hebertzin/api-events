import { Controller } from "../../../../domain/Controller";
import { AuthenticationController } from "../../../../presentation/controllers/authentication/AuthenticationController";
import { makeAuthentication } from "../../usecases/authentication/AuthenticationFactory";

export const makeAuthenticationController = (): Controller => {
  return new AuthenticationController(makeAuthentication());
};
