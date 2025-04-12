import { NextFunction, Request, Response } from "express";
import { Jwt } from "../../domain/Jwt";
import { HttpStatusCode } from "../../domain/HttpStatus";
import { JwtManager } from "../../infra/security/jwt/Jwt";
import { Logging } from "../../domain/Logging";
import { logging } from "../../infra/logging/Logging";

export class AuthMiddleware {
  constructor(
    readonly jwtService: Jwt,
    readonly logging: Logging,
  ) { }
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
