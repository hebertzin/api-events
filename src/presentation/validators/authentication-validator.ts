import {
  DataValidator,
  ZodValidator,
} from "../middlewares/zod-validator-middleware";
import { authenticationValidationSchema } from "./schemas/authentication";

export const authenticationValidatorMiddleware = new DataValidator(
  new ZodValidator(authenticationValidationSchema),
);
