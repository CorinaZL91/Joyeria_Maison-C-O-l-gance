import { z } from "zod";

const numberFromInput = (label: string) =>
  z.coerce.number().refine((value) => !Number.isNaN(value), {
    message: `${label} inválido`,
  });

const sizeItemSchema = z.object({
  talla: z
    .string()
    .trim()
    .min(1, "La talla es obligatoria")
    .max(30, "La talla es demasiado larga"),

  stock: numberFromInput("El stock de la talla")
    .int("El stock de la talla debe ser un número entero")
    .min(0, "El stock de la talla no puede ser negativo"),

  activo: z.boolean().default(true),
});

export const createProductSchema = z
  .object({
    nombre: z
      .string()
      .trim()
      .min(1, "El nombre es obligatorio")
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre es demasiado largo"),

    descripcion: z
      .string()
      .trim()
      .min(1, "La descripción es obligatoria")
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .max(1000, "La descripción es demasiado larga"),

    precio: numberFromInput("El precio").positive(
      "El precio debe ser mayor a 0"
    ),

    material: z
      .string()
      .trim()
      .min(1, "El material es obligatorio")
      .max(50, "El material es demasiado largo"),

    usar_tallas: z.boolean().default(false),

    stock: numberFromInput("El stock")
      .int("El stock debe ser un número entero")
      .min(0, "El stock no puede ser negativo"),

    stock_minimo: numberFromInput("El stock mínimo")
      .int("El stock mínimo debe ser un número entero")
      .min(0, "El stock mínimo no puede ser negativo"),

    categoria_id: numberFromInput("La categoría")
      .int("La categoría es obligatoria")
      .positive("Selecciona una categoría válida"),

    activo: z.boolean(),

    imagen: z.any().optional().nullable(),

    tallas: z.array(sizeItemSchema).default([]),
  })
  .superRefine((data, ctx) => {
    if (data.usar_tallas) {
      if (!data.tallas || data.tallas.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tallas"],
          message: "Debes agregar al menos una talla",
        });
      }

      const tallasLimpias = data.tallas
        .map((item) => item.talla.trim().toLowerCase())
        .filter((talla) => talla.length > 0);

      const tallasUnicas = new Set(tallasLimpias);

      if (tallasLimpias.length !== tallasUnicas.size) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tallas"],
          message: "No puedes repetir tallas en el mismo producto",
        });
      }
    } else {
      if (data.stock < 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["stock"],
          message: "El stock no puede ser negativo",
        });
      }
    }
  });

export type CreateProductFormValues = z.input<typeof createProductSchema>;
export type CreateProductSubmitValues = z.output<typeof createProductSchema>;

export const updateProductSchema = createProductSchema;
export type UpdateProductFormValues = z.input<typeof updateProductSchema>;
export type UpdateProductSubmitValues = z.output<typeof updateProductSchema>;
