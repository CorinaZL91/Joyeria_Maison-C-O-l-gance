import type { NextFunction, Request, Response } from "express";
import { Prisma } from "../../generated/prisma/client.js";
import { ZodError } from "zod";
import { AppError } from "../utils/appError.js";

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error("========== ERROR BACKEND ==========");
  console.error("Error completo:", error);

  if (error instanceof Error) {
    console.error("Nombre:", error.name);
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.error("Código Prisma:", error.code);
    console.error("Meta Prisma:", error.meta);
  }

  console.error("===================================");

  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      success: false,
      message: "Error de validación",
      errors: error.flatten(),
    });
    return;
  }

  if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    res.status(409).json({
      success: false,
      message: "Valor único duplicado",
    });
    return;
  }

  res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Error interno del servidor"
        : error instanceof Error
        ? error.message
        : "Error interno del servidor",
  });
};
