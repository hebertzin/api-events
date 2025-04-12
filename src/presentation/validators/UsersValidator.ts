import { userValidationSchema } from "./schemas/users";
import {
  DataValidator,
  ZodValidator,
} from "../middlewares/ValidateBodyMiddleware";

export const usersValidatorMiddleware = new DataValidator(
  new ZodValidator(userValidationSchema),
);
