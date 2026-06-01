import { z } from "zod";

const toBoolean = (defaultValue?: boolean) =>
  z.preprocess(
    (value) => {
      if (value === undefined || value === null || value === "") {
        return defaultValue;
      }

      if (typeof value === "boolean") return value;

      if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();

        if (normalized === "true") return true;
        if (normalized === "false") return false;
      }

      return value;
    },
    defaultValue === undefined ? z.boolean().optional() : z.boolean()
  );

const queryBoolean = z.preprocess((value) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "boolean") return value;

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();

    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }

  return undefined;
}, z.boolean().optional());

const toNumber = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => {
    if (value === undefined || value === null || value === "") {
      return undefined;
    }

    return Number(value);
  }, schema);

const toNumberWithDefault = <T extends z.ZodTypeAny>(
  defaultValue: number,
  schema: T
) =>
  z.preprocess((value) => {
    if (value === undefined || value === null || value === "") {
      return defaultValue;
    }

    return Number(value);
  }, schema);

const tallaSchema = z.object({
  talla: z.string().trim().min(1, "La talla es obligatoria"),

  stock: toNumber(
    z
      .number()
      .int("El stock de la talla debe ser entero")
      .min(0, "El stock de la talla no puede ser negativo")
  ),

  activo: toBoolean(true),
});

const tallasSchema = z.preprocess((value) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  }

  return value;
}, z.array(tallaSchema).optional());

const validateDuplicateTallas = (
  tallas: Array<{ talla: string }> | undefined,
  ctx: z.RefinementCtx
) => {
  if (!tallas) return;

  const names = tallas.map((item) => item.talla.trim().toLowerCase());

  if (new Set(names).size !== names.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["tallas"],
      message: "No se permiten tallas repetidas en el mismo producto",
    });
  }
};

const baseProductSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre del producto es obligatorio"),

  descripcion: z
    .string()
    .trim()
    .min(1, "La descripción del producto es obligatoria"),

  precio: toNumber(z.number().positive("El precio debe ser mayor a 0")),

  material: z.string().trim().min(1, "El material del producto es obligatorio"),

  categoria_id: toNumber(
    z
      .number()
      .int("La categoría debe ser entera")
      .positive("La categoría es inválida")
  ),

  stock: toNumber(
    z
      .number()
      .int("El stock debe ser entero")
      .min(0, "El stock general no puede ser negativo")
      .optional()
  ),

  stock_minimo: toNumberWithDefault(
    5,
    z
      .number()
      .int("El stock mínimo debe ser entero")
      .min(0, "El stock mínimo no puede ser negativo")
  ),

  activo: toBoolean(true),

  usar_tallas: toBoolean(false),

  tallas: tallasSchema,
});

export const createProductSchema = baseProductSchema.superRefine(
  (data, ctx) => {
    validateDuplicateTallas(data.tallas, ctx);

    if (data.usar_tallas) {
      if (!data.tallas || data.tallas.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tallas"],
          message:
            "Debes agregar al menos una talla cuando el producto usa tallas",
        });
      }

      if (data.stock !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["stock"],
          message:
            "No debes enviar stock general cuando el producto usa tallas",
        });
      }
    }

    if (!data.usar_tallas) {
      if (data.stock === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["stock"],
          message:
            "El stock general es obligatorio cuando el producto no usa tallas",
        });
      }

      if (data.tallas && data.tallas.length > 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tallas"],
          message: "No debes enviar tallas cuando el producto no usa tallas",
        });
      }
    }
  }
);

export const updateProductSchema = baseProductSchema
  .partial()
  .extend({
    removeImage: toBoolean(),
  })
  .superRefine((data, ctx) => {
    validateDuplicateTallas(data.tallas, ctx);

    if (data.usar_tallas === true) {
      if (data.tallas !== undefined && data.tallas.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["tallas"],
          message:
            "El producto debe tener al menos una talla activa cuando usa tallas",
        });
      }

      if (data.stock !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["stock"],
          message:
            "No debes enviar stock general cuando el producto usa tallas",
        });
      }
    }

    if (data.usar_tallas === false && data.tallas && data.tallas.length > 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["tallas"],
        message: "No debes enviar tallas cuando el producto no usa tallas",
      });
    }
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "Debes enviar al menos un campo para actualizar",
  });

export const productQuerySchema = z.object({
  search: z.string().trim().optional(),

  categoria_id: toNumber(
    z
      .number()
      .int("La categoría debe ser entera")
      .positive("La categoría es inválida")
      .optional()
  ),

  activo: queryBoolean,

  admin: queryBoolean,
});

export const productIdParamsSchema = z.object({
  id: toNumber(
    z.number().int("El ID debe ser entero").positive("ID de producto inválido")
  ),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;

export type UpdateProductInput = z.infer<typeof updateProductSchema>;

export type ProductQueryInput = z.infer<typeof productQuerySchema>;

export type ProductIdParamsInput = z.infer<typeof productIdParamsSchema>;
