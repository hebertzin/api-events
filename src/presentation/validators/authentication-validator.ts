import { DataValidator, ZodValidator } from "../middlewares/validator";
import { authenticationValidationSchema } from "./schemas/authentication";

export const authenticationValidatorMiddleware = new DataValidator(
  new ZodValidator(authenticationValidationSchema),
);
