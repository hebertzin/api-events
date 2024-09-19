// import { Request, Response, Router } from "express";
// import { createActivityController } from "../../../infraestructure/config/activity/CreateActivityDependencie";
// import { deleteActivityController } from "../../../infraestructure/config/activity/DeleteActivityDependencies";
// import { getActivityController } from "../../../infraestructure/config/activity/GetActivityDependencies";
// import { listActivityController } from "../../../infraestructure/config/activity/LIstActivityDependencies";
// import { updateActivityController } from "../../../infraestructure/config/activity/UpdateActivityDependencies";

// export const activiyRoutes = Router();

// activiyRoutes.post("/", async (req: Request, res: Response) => {
//   const httpResponse = await createActivityController.handle(req);
//   res.status(httpResponse.statusCode).json({
//     message: httpResponse.msg,
//     code: httpResponse.statusCode,
//     body: httpResponse.body,
//   });
// });

// activiyRoutes.delete("/:id", async (req: Request, res: Response) => {
//   const httpResponse = await deleteActivityController.handle(req);
//   res.status(httpResponse.statusCode).json({
//     message: httpResponse.msg,
//     code: httpResponse.statusCode,
//     body: httpResponse.body,
//   });
// });

// activiyRoutes.get("/:id", async (req: Request, res: Response) => {
//   const httpResponse = await getActivityController.handle(req);
//   res.status(httpResponse.statusCode).json({
//     message: httpResponse.msg,
//     code: httpResponse.statusCode,
//     body: httpResponse.body,
//   });
// });

// activiyRoutes.get("/:id/all", async (req: Request, res: Response) => {
//   const httpResponse = await listActivityController.handle(req);
//   res.status(httpResponse.statusCode).json({
//     message: httpResponse.msg,
//     code: httpResponse.statusCode,
//     body: httpResponse.body,
//   });
// });

// activiyRoutes.put("/:id/", async (req: Request, res: Response) => {
//   const httpResponse = await updateActivityController.handle(req);
//   res.status(httpResponse.statusCode).json({
//     message: httpResponse.msg,
//     code: httpResponse.statusCode,
//     body: httpResponse.body,
//   });
// });
