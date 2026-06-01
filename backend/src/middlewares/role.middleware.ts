import type { NextFunction, Request, Response } from "express";
import { RolUsuario } from "../../generated/prisma/client.js";

export const authorizeRole = (...roles: RolUsuario[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: "No autenticado" });
      return;
    }

    if (!roles.includes(req.user.rol)) {
      res.status(403).json({ message: "No autorizado" });
      return;
    }

    next();
  };
};
