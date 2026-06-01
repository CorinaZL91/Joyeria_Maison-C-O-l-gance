import type { LoginInput, RegisterInput } from "../validators/auth.schemas.js";
export declare const authService: {
    register: (body: RegisterInput) => Promise<{
        token: string;
        user: {
            nombre: string;
            correo: string;
            rol: import("../../generated/prisma/enums.js").RolUsuario;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
    }>;
    login: (body: LoginInput) => Promise<{
        token: string;
        user: {
            nombre: string;
            correo: string;
            rol: import("../../generated/prisma/enums.js").RolUsuario;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
    }>;
    me: (userId: number) => Promise<{
        nombre: string;
        correo: string;
        rol: import("../../generated/prisma/enums.js").RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map