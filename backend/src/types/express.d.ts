import { RolUsuario } from "../../generated/prisma/client.js";
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        rol: RolUsuario;
      };
    }
  }
}

export {};
