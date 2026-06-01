import type { NextFunction, Request, Response } from "express";
import { RolUsuario } from "../../generated/prisma/client.js";
export declare const authorizeRole: (...roles: RolUsuario[]) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=role.middleware.d.ts.map