export declare const RolUsuario: {
    readonly administrador: "administrador";
    readonly cliente: "cliente";
};
export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario];
export declare const EstadoPedido: {
    readonly pendiente: "pendiente";
    readonly en_preparacion: "en_preparacion";
    readonly enviado: "enviado";
    readonly entregado: "entregado";
    readonly cancelado: "cancelado";
};
export type EstadoPedido = (typeof EstadoPedido)[keyof typeof EstadoPedido];
export declare const MetodoPago: {
    readonly tarjeta: "tarjeta";
    readonly tienda: "tienda";
};
export type MetodoPago = (typeof MetodoPago)[keyof typeof MetodoPago];
//# sourceMappingURL=enums.d.ts.map