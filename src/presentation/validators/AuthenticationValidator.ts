import {
  DataValidator,
  ZodValidator,
} from "../middlewares/ValidateBodyMiddleware";
import { authenticationValidationSchema } from "./schemas/authentication";

export const authenticationValidatorMiddleware = new DataValidator(
  new ZodValidator(authenticationValidationSchema),
);
