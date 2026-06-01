import { z } from "zod";

export const categoryIdParamsSchema = z.object({
  id: z.coerce
    .number({
      message: "El ID debe ser numérico",
    })
    .int("El ID debe ser entero")
    .positive("ID de categoría inválido"),
});

export const createCategorySchema = z.object({
  nombre: z.string().trim().min(1, "El nombre de la categoría es obligatorio"),

  descripcion: z
    .string()
    .trim()
    .transform((value) => (value.length > 0 ? value : null))
    .optional(),
});

export const updateCategorySchema = z
  .object({
    nombre: z
      .string()
      .trim()
      .min(1, "El nombre de la categoría es obligatorio")
      .optional(),

    descripcion: z
      .string()
      .trim()
      .transform((value) => (value.length > 0 ? value : null))
      .optional(),
  })
  .refine(
    (data) => data.nombre !== undefined || data.descripcion !== undefined,
    {
      message: "Debes enviar al menos un campo para actualizar",
    }
  );

export type CategoryIdParamsInput = z.infer<typeof categoryIdParamsSchema>;

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;

export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
