import { z } from "zod";
export declare const createOrderSchema: z.ZodObject<{
    metodo_pago: z.ZodEnum<{
        tarjeta: "tarjeta";
        tienda: "tienda";
    }>;
    direccion_calle: z.ZodOptional<z.ZodString>;
    direccion_ciudad: z.ZodOptional<z.ZodString>;
    direccion_codigo_postal: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateOrderStatusSchema: z.ZodObject<{
    estado: z.ZodEnum<{
        pendiente: "pendiente";
        en_preparacion: "en_preparacion";
        enviado: "enviado";
        entregado: "entregado";
        cancelado: "cancelado";
    }>;
}, z.core.$strip>;
export declare const orderIdParamsSchema: z.ZodObject<{
    id: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type UpdateOrderStatusInput = z.infer<typeof updateOrderStatusSchema>;
export type OrderIdParamsInput = z.infer<typeof orderIdParamsSchema>;
//# sourceMappingURL=order.schemas.d.ts.map