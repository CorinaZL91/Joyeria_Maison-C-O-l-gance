import { z } from "zod";

const toNumber = (label: string) =>
  z.coerce.number({
    message: `${label} debe ser numérico`,
  });

const optionalTallaId = z.preprocess((value) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  return value;
}, toNumber("La talla").int("La talla debe ser un entero").positive("La talla debe ser válida").optional());

export const addToCartSchema = z.object({
  producto_id: toNumber("El ID del producto")
    .int("El ID del producto debe ser entero")
    .positive("El ID del producto debe ser válido"),

  cantidad: toNumber("La cantidad")
    .int("La cantidad debe ser entera")
    .positive("La cantidad debe ser mayor a 0"),

  producto_talla_id: optionalTallaId,
});

export const cartItemParamsSchema = z.object({
  producto_id: toNumber("El ID del producto")
    .int("El ID del producto debe ser entero")
    .positive("El ID del producto debe ser válido"),
});

export const updateCartItemQuantityBodySchema = z.object({
  cantidad: toNumber("La cantidad")
    .int("La cantidad debe ser entera")
    .positive("La cantidad debe ser mayor a 0"),

  producto_talla_id: optionalTallaId,
});

export const removeCartItemQuerySchema = z.object({
  producto_talla_id: optionalTallaId,
});

export type AddToCartInput = z.infer<typeof addToCartSchema>;
export type CartItemParamsInput = z.infer<typeof cartItemParamsSchema>;
export type UpdateCartItemQuantityInput = z.infer<
  typeof updateCartItemQuantityBodySchema
>;
export type RemoveCartItemQueryInput = z.infer<
  typeof removeCartItemQuerySchema
>;
