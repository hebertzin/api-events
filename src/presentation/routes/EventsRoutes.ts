import { Router } from "express";
import { adaptRoute } from "../../adapters/RouterAdapter";
import { eventsValidatorMiddleware } from "../validators/EventsValidator";
import { makeCreateEventController } from "../../infra/factory/controllers/events/CreateEventFactory";
import { makeListEventsController } from "../../infra/factory/controllers/events/ListEventsFactory";

export const eventsManagementRoutes = Router();

eventsManagementRoutes.post(
  "/",
  eventsValidatorMiddleware.validate(),
  adaptRoute(makeCreateEventController()),
);

eventsManagementRoutes.get("/:user_id", adaptRoute(makeListEventsController()));
