import jwt from "jsonwebtoken";
import type { RolUsuario } from "../../generated/prisma/enums";

interface JwtPayload {
  userId: number;
  rol: RolUsuario;
}

export const generateToken = (payload: JwtPayload): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET no está definido en las variables de entorno");
  }

  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const verifyToken = (token: string): JwtPayload => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET no está definido en las variables de entorno");
  }

  return jwt.verify(token, secret) as JwtPayload;
};
