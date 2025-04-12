import { Router } from "express";
import { adaptRoute } from "../../adapters/RouterAdapter";
import { eventsValidatorMiddleware } from "../validators/EventsValidator";
import { makeCreateEventController } from "../../infra/factory/controllers/events/CreateEventFactory";
import { makeListEventsController } from "../../infra/factory/controllers/events/ListEventsFactory";
import { makeDeleteEventController } from "../../infra/factory/controllers/events/DeleteEventFactory";
import { makeUpdateEventController } from "../../infra/factory/controllers/events/UpdateEventFactory";

export const eventsManagementRoutes = Router();

eventsManagementRoutes.post(
  "/",
  eventsValidatorMiddleware.validate(),
  adaptRoute(makeCreateEventController()),
);

eventsManagementRoutes.put(
  "/:id",
  eventsValidatorMiddleware.validate(),
  adaptRoute(makeUpdateEventController()),
);

eventsManagementRoutes.get("/:user_id", adaptRoute(makeListEventsController()));
eventsManagementRoutes.delete("/:id", adaptRoute(makeDeleteEventController()));
eventsManagementRoutes.get("/all", adaptRoute(makeListEventsController()));
