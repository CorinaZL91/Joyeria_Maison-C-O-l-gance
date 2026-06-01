export declare const EstadoAlerta: {
    readonly Activa: "Activa";
    readonly Atendida: "Atendida";
};
export type EstadoAlerta = (typeof EstadoAlerta)[keyof typeof EstadoAlerta];
export declare const EstadoEnvio: {
    readonly Procesando: "Procesando";
    readonly Enviado: "Enviado";
    readonly Entregado: "Entregado";
    readonly Cancelado: "Cancelado";
};
export type EstadoEnvio = (typeof EstadoEnvio)[keyof typeof EstadoEnvio];
export declare const Rol: {
    readonly cliente: "cliente";
    readonly admin: "admin";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const Materiales: {
    readonly oro: "oro";
    readonly plata: "plata";
    readonly acero_inoxidable: "acero_inoxidable";
};
export type Materiales = (typeof Materiales)[keyof typeof Materiales];
//# sourceMappingURL=enums.d.ts.map