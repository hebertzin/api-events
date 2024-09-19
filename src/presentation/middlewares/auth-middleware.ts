import { NextFunction, Request, Response } from "express";
import { Jwt } from "../../domain/jwt";
import { HttpStatusCode } from "../../domain/http-status";
import { JwtManager } from "../../infraestructure/security/jwt/jwt";
import { Logging } from "../../domain/logging";
import { logging } from "../../infraestructure/logging/logging";

export class AuthMiddleware {
  constructor(
    readonly jwtService: Jwt,
    readonly logging: Logging
  ) {}
  async isAuthorized(req: Request, res: Response, next: NextFunction) {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (!token) {
      this.logging.warn("Token not found in header request");
      return res
        .status(HttpStatusCode.NotFound)
        .json({ message: "Token not found" });
    }
    const isValidToken = this.jwtService.verify(token);
    if (!isValidToken) {
      this.logging.warn("Token is not valid or expired it");
      return res
        .status(HttpStatusCode.Unauthorized)
        .json({ msg: "Token is not valid" });
    }
    next();
  }
}

//singleton
export const authMiddleware = new AuthMiddleware(new JwtManager(), logging);
