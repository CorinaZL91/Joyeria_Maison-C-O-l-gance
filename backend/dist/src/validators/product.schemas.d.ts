import { z } from "zod";
export declare const createProductSchema: z.ZodObject<{
    nombre: z.ZodString;
    descripcion: z.ZodString;
    precio: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
    material: z.ZodString;
    categoria_id: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
    stock: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>;
    stock_minimo: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
    activo: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
    usar_tallas: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
    tallas: z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodObject<{
        talla: z.ZodString;
        stock: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
        activo: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>>>>;
}, z.core.$strip>;
export declare const updateProductSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodString>;
    precio: z.ZodOptional<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>>;
    material: z.ZodOptional<z.ZodString>;
    categoria_id: z.ZodOptional<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>>;
    stock: z.ZodOptional<z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>>;
    stock_minimo: z.ZodOptional<z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>>;
    activo: z.ZodOptional<z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>>;
    usar_tallas: z.ZodOptional<z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>>;
    tallas: z.ZodOptional<z.ZodPipe<z.ZodTransform<any, unknown>, z.ZodOptional<z.ZodArray<z.ZodObject<{
        talla: z.ZodString;
        stock: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
        activo: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>>>>>;
    removeImage: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const productQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    categoria_id: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>;
    activo: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
    admin: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodBoolean | z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const productIdParamsSchema: z.ZodObject<{
    id: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodNumber>;
}, z.core.$strip>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
export type ProductQueryInput = z.infer<typeof productQuerySchema>;
export type ProductIdParamsInput = z.infer<typeof productIdParamsSchema>;
//# sourceMappingURL=product.schemas.d.ts.map