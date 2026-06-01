import type { Request, Response, NextFunction } from "express";
import { type ZodSchema } from "zod";
type ValidationSchemas = {
    body?: ZodSchema;
    params?: ZodSchema;
    query?: ZodSchema;
};
export declare const validate: (schemas: ValidationSchemas) => (req: Request, res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.middleware.d.ts.map