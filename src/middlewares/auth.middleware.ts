import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.js";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    const tokenFromCookie = req.cookies?.token;

    const tokenFromHeader =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : undefined;

    const token = tokenFromCookie || tokenFromHeader;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "Token no proporcionado",
      });
      return;
    }

    const decoded = verifyToken(token);

    req.user = {
      userId: decoded.userId,
      rol: decoded.rol,
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token inválido o expirado",
    });
  }
};
