import { eventsValidationSchema } from "./schemas/activity";
import {
  DataValidator,
  ZodValidator,
} from "../middlewares/zod-validator-middleware";

export const eventsValidatorMiddleware = new DataValidator(
  new ZodValidator(eventsValidationSchema),
);
