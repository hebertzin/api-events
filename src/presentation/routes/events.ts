import { Router } from "express";
import { adaptRoute } from "../../adapters/router-adapter";
import { eventsValidatorMiddleware } from "../validators/events-validator";
import { makeCreateEventController } from "../../infraestructure/factories/controllers/events/create";
import { makeListEventsController } from "../../infraestructure/factories/controllers/events/list";

export const eventsManagementRoutes = Router();

eventsManagementRoutes.post(
  "/",
  eventsValidatorMiddleware.validate(),
  adaptRoute(makeCreateEventController()),
);

eventsManagementRoutes.get("/:user_id", adaptRoute(makeListEventsController()));
