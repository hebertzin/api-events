import { Request, Response } from "express";
import { Controller, HttpResponse } from "../domain/controller";

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    try {
      const httpResponse: HttpResponse = await controller.handle(req);
      if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
        res.status(httpResponse.statusCode).json({
          response: httpResponse,
        });
      } else {
        res.status(httpResponse.statusCode).json({
          error: httpResponse.msg,
        });
      }
    } catch (error) {
      return res.status(error.statusCode).json({
        msg: "An unexpected error occurred.",
        error,
      });
    }
  };
};
