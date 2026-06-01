import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodSchema } from "zod";

type ValidationSchemas = {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
};

export const validate = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (schemas.body) {
        req.body = schemas.body.parse(req.body ?? {}) as typeof req.body;
      }

      if (schemas.params) {
        req.params = schemas.params.parse(req.params ?? {}) as any;
      }

      if (schemas.query) {
        req.query = schemas.query.parse(req.query ?? {}) as any;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Error de validación",
          errors: error.flatten(),
        });
        return;
      }

      res.status(500).json({
        success: false,
        message: "Error interno del servidor",
      });
    }
  };
};
