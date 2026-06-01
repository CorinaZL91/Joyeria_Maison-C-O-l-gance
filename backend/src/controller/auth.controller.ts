import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/appError.js";
import { authService } from "../services/auth.service.js";

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ("none" as const) : ("lax" as const),
  maxAge: 1000 * 60 * 60 * 24 * 7,
};

export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = await authService.register(req.body);

    res.cookie("token", data.token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente",
      data: {
        user: data.user,
      },
    });
  }
);

export const login = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const data = await authService.login(req.body);

    res.cookie("token", data.token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Inicio de sesión exitoso",
      data: {
        user: data.user,
      },
    });
  }
);

export const logout = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.clearCookie("token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    });

    res.status(200).json({
      success: true,
      message: "Sesión cerrada correctamente",
    });
  }
);

export const me = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
      throw new AppError("No autenticado", 401);
    }

    const user = await authService.me(req.user.userId);

    res.status(200).json({
      success: true,
      data: user,
    });
  }
);
