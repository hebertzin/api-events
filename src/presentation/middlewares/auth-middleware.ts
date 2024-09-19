import { NextFunction, Request, Response } from "express";
import { Jwt } from "../../domain/jwt";
import { HttpStatusCode } from "../../domain/http-status";
import { JwtServiceImpl } from "../../infraestructure/security/jwt/jwt";

interface User {
  id: string;
  user: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export class AuthMiddleware {
  constructor(readonly jwtService: Jwt) {}

  async isAuthorized(req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (!token) {
      return res
        .status(HttpStatusCode.NotFound)
        .json({ message: "Token not found" });
    }

    const isValidToken = this.jwtService.verify(token);
    if (!isValidToken) {
      return res
        .status(HttpStatusCode.Unauthorized)
        .json({ msg: "Token is not valid" });
    }
    next();
  }
}

export const authMiddleware = new AuthMiddleware(new JwtServiceImpl());
