import { activityValidationSchema } from "./schemas/activity";
import {
  DataValidator,
  ZodValidator,
} from "../middlewares/zod-validator-middleware";

export const activityValidatorMiddleware = new DataValidator(
  new ZodValidator(activityValidationSchema),
);
