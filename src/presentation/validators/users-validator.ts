import { zodValidationUserSchema } from "./schemas/users";
import {
  DataValidator,
  ZodValidator,
} from "../middlewares/zod-validator-middleware";

export const usersValidatorMiddleware = new DataValidator(
  new ZodValidator(zodValidationUserSchema)
);
