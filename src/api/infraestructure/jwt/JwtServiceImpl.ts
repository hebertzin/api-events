import { JwtService } from "../../domain/JwtService";
import jwt from "jsonwebtoken";

export class JwtServiceImpl implements JwtService {
  private readonly secretKey = "your-secret-key"; // Substitua pelo seu segredo

  sign(payload: string | object | Buffer, options?: jwt.SignOptions): string {
    return jwt.sign(payload, this.secretKey, options);
  }

  verify(token: string, options?: jwt.VerifyOptions): string | object {
    return jwt.verify(token, this.secretKey, options);
  }
}
