import { RolUsuario } from "../../generated/prisma/client.js";
export declare const authRepository: {
    findUserByEmail: (correo: string) => Promise<{
        nombre: string;
        correo: string;
        password_hash: string;
        rol: RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        fecha_registro: Date;
        id: number;
    } | null>;
    findUserByEmailWithPassword: (correo: string) => Promise<{
        nombre: string;
        correo: string;
        password_hash: string;
        rol: RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
    } | null>;
    findUserById: (id: number) => Promise<{
        nombre: string;
        correo: string;
        rol: RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
    } | null>;
    createClientUser: (data: {
        nombre: string;
        correo: string;
        password_hash: string;
        telefono: string;
    }) => Promise<{
        nombre: string;
        correo: string;
        rol: RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
    }>;
};
//# sourceMappingURL=auth.repository.d.ts.map