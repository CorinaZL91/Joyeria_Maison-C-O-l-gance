import { z } from "zod";
export declare const categoryIdParamsSchema: z.ZodObject<{
    id: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const createCategorySchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
}, z.core.$strip>;
export declare const updateCategorySchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | null, string>>>;
}, z.core.$strip>;
export type CategoryIdParamsInput = z.infer<typeof categoryIdParamsSchema>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
//# sourceMappingURL=category.schemas.d.ts.map