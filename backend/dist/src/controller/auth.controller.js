import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/appError.js";
import { authService } from "../services/auth.service.js";
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 días
};
export const register = asyncHandler(async (req, res) => {
    const data = await authService.register(req.body);
    // 🔥 Guardar JWT en cookie httpOnly
    res.cookie("token", data.token, cookieOptions);
    res.status(201).json({
        success: true,
        message: "Usuario registrado correctamente",
        data: {
            user: data.user,
        },
    });
});
export const login = asyncHandler(async (req, res) => {
    const data = await authService.login(req.body);
    // 🔥 Guardar JWT en cookie httpOnly
    res.cookie("token", data.token, cookieOptions);
    res.status(200).json({
        success: true,
        message: "Inicio de sesión exitoso",
        data: {
            user: data.user,
        },
    });
});
export const logout = asyncHandler(async (_req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    });
    res.status(200).json({
        success: true,
        message: "Sesión cerrada correctamente",
    });
});
export const me = asyncHandler(async (req, res) => {
    if (!req.user) {
        throw new AppError("No autenticado", 401);
    }
    const user = await authService.me(req.user.userId);
    res.status(200).json({
        success: true,
        data: user,
    });
});
//# sourceMappingURL=auth.controller.js.map