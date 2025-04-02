import { userValidationSchema } from "./schemas/users";
import {
  DataValidator,
  ZodValidator,
} from "../middlewares/validator";

export const usersValidatorMiddleware = new DataValidator(
  new ZodValidator(userValidationSchema),
);
