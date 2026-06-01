import { z } from "zod";
export declare const registerSchema: z.ZodObject<{
    nombre: z.ZodString;
    correo: z.ZodString;
    password: z.ZodString;
    telefono: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    correo: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.schemas.d.ts.map