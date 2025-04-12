import { Jwt } from "../../../domain/Jwt";
import jwt from "jsonwebtoken";

export class JwtManager implements Jwt {
  private readonly secretKey = process.env.SECRET as string;

  sign(payload: string | object | Buffer, options?: jwt.SignOptions): string {
    return jwt.sign(payload, this.secretKey, options);
  }

  verify(token: string, options?: jwt.VerifyOptions): string | object {
    return jwt.verify(token, this.secretKey, options);
  }
}
