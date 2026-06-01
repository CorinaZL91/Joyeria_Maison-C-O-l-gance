import type { RolUsuario } from "../../generated/prisma/enums";
interface JwtPayload {
    userId: number;
    rol: RolUsuario;
}
export declare const generateToken: (payload: JwtPayload) => string;
export declare const verifyToken: (token: string) => JwtPayload;
export {};
//# sourceMappingURL=jwt.d.ts.map