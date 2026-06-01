import { Prisma } from "../../generated/prisma/client.js";
import { AppError } from "../utils/appError.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import { generateToken } from "../utils/jwt.js";
import { authRepository } from "../repositories/auth.repository.js";
export const authService = {
    register: async (body) => {
        const nombre = body.nombre;
        const correo = body.correo.toLowerCase();
        const password = body.password;
        const telefono = body.telefono;
        const existingUser = await authRepository.findUserByEmail(correo);
        if (existingUser) {
            throw new AppError("Ya existe un usuario con ese correo", 409);
        }
        const hashedPassword = await hashPassword(password);
        try {
            const newUser = await authRepository.createClientUser({
                nombre,
                correo,
                password_hash: hashedPassword,
                telefono,
            });
            const token = generateToken({
                userId: newUser.id,
                rol: newUser.rol,
            });
            return {
                token,
                user: newUser,
            };
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002") {
                const target = Array.isArray(error.meta?.target)
                    ? error.meta.target
                    : [];
                if (target.includes("correo")) {
                    throw new AppError("Ya existe un usuario con ese correo", 409);
                }
                if (target.includes("telefono")) {
                    throw new AppError("Ya existe un usuario con ese teléfono", 409);
                }
                throw new AppError("Ya existe un dato duplicado", 409);
            }
            throw error;
        }
    },
    login: async (body) => {
        const correo = body.correo.toLowerCase();
        const password = body.password;
        const user = await authRepository.findUserByEmailWithPassword(correo);
        if (!user) {
            throw new AppError("Credenciales inválidas", 401);
        }
        const isPasswordValid = await comparePassword(password, user.password_hash);
        if (!isPasswordValid) {
            throw new AppError("Credenciales inválidas", 401);
        }
        const token = generateToken({
            userId: user.id,
            rol: user.rol,
        });
        const { password_hash, ...userWithoutPassword } = user;
        return {
            token,
            user: userWithoutPassword,
        };
    },
    me: async (userId) => {
        const user = await authRepository.findUserById(userId);
        if (!user) {
            throw new AppError("Usuario no encontrado", 404);
        }
        return user;
    },
};
//# sourceMappingURL=auth.service.js.map