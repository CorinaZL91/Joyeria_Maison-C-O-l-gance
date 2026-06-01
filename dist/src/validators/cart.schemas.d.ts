import { z } from "zod";
export declare const addToCartSchema: z.ZodObject<{
    producto_id: z.ZodCoercedNumber<unknown>;
    cantidad: z.ZodCoercedNumber<unknown>;
    producto_talla_id: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const cartItemParamsSchema: z.ZodObject<{
    producto_id: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const updateCartItemQuantityBodySchema: z.ZodObject<{
    cantidad: z.ZodCoercedNumber<unknown>;
    producto_talla_id: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export declare const removeCartItemQuerySchema: z.ZodObject<{
    producto_talla_id: z.ZodPipe<z.ZodTransform<{} | undefined, unknown>, z.ZodOptional<z.ZodCoercedNumber<unknown>>>;
}, z.core.$strip>;
export type AddToCartInput = z.infer<typeof addToCartSchema>;
export type CartItemParamsInput = z.infer<typeof cartItemParamsSchema>;
export type UpdateCartItemQuantityInput = z.infer<typeof updateCartItemQuantityBodySchema>;
export type RemoveCartItemQueryInput = z.infer<typeof removeCartItemQuerySchema>;
//# sourceMappingURL=cart.schemas.d.ts.map