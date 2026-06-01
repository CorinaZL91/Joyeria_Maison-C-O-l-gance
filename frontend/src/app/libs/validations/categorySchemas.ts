import { z } from "zod";

export const categorySchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(80, "El nombre es demasiado largo"),

  descripcion: z
    .string()
    .min(1, "La descripción es obligatoria")
    .min(5, "La descripción debe tener al menos 5 caracteres")
    .max(300, "La descripción es demasiado larga"),
});

export type CategoryFormValues = z.input<typeof categorySchema>;
export type CategorySubmitValues = z.output<typeof categorySchema>;
