import { z } from "zod";

export const createOrderSchema = z
  .object({
    metodo_pago: z.enum(["tarjeta", "tienda"], {
      message: "El método de pago debe ser 'tarjeta' o 'tienda'",
    }),

    direccion_calle: z
      .string()
      .trim()
      .min(1, "La calle es obligatoria")
      .max(150, "La calle es demasiado larga")
      .optional(),

    direccion_ciudad: z
      .string()
      .trim()
      .min(1, "La ciudad es obligatoria")
      .max(100, "La ciudad es demasiado larga")
      .optional(),

    direccion_codigo_postal: z
      .string()
      .trim()
      .min(4, "Código postal inválido")
      .max(10, "Código postal demasiado largo")
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.metodo_pago === "tienda") {
      if (
        data.direccion_calle !== undefined ||
        data.direccion_ciudad !== undefined ||
        data.direccion_codigo_postal !== undefined
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "No debes enviar dirección cuando el método de pago es en tienda",
          path: ["metodo_pago"],
        });
      }
    }
  });

export const updateOrderStatusSchema = z.object({
  estado: z.enum(
    ["pendiente", "en_preparacion", "enviado", "entregado", "cancelado"],
    {
      message:
        "Estado inválido. Usa: pendiente, en_preparacion, enviado, entregado o cancelado",
    }
  ),
});

export const orderIdParamsSchema = z.object({
  id: z.coerce
    .number({
      message: "El ID debe ser numérico",
    })
    .int("El ID debe ser entero")
    .positive("ID inválido"),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>;
export type OrderIdParamsInput = z.infer<typeof orderIdParamsSchema>;
