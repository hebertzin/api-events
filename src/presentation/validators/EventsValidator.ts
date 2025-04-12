import { eventsValidationSchema } from "./schemas/events";
import { DataValidator, ZodValidator } from "../middlewares/ValidateBodyMiddleware";

export const eventsValidatorMiddleware = new DataValidator(
  new ZodValidator(eventsValidationSchema),
);
