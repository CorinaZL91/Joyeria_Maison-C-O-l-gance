import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Categorias: "Categorias";
    readonly Productos: "Productos";
    readonly Alerta_stock: "Alerta_stock";
    readonly Pedidos: "Pedidos";
    readonly Detalle_Pedidos: "Detalle_Pedidos";
    readonly Carrito: "Carrito";
    readonly Usuario: "Usuario";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriasScalarFieldEnum: {
    readonly id_categoria: "id_categoria";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum];
export declare const ProductosScalarFieldEnum: {
    readonly id_producto: "id_producto";
    readonly id_categoria: "id_categoria";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly precio: "precio";
    readonly material: "material";
    readonly stock: "stock";
    readonly imagen_url: "imagen_url";
};
export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum];
export declare const Alerta_stockScalarFieldEnum: {
    readonly id_alerta: "id_alerta";
    readonly id_producto: "id_producto";
    readonly nivel_minimo: "nivel_minimo";
    readonly estado: "estado";
};
export type Alerta_stockScalarFieldEnum = (typeof Alerta_stockScalarFieldEnum)[keyof typeof Alerta_stockScalarFieldEnum];
export declare const PedidosScalarFieldEnum: {
    readonly id_pedido: "id_pedido";
    readonly id_usuario: "id_usuario";
    readonly fecha_pedido: "fecha_pedido";
    readonly total: "total";
    readonly estado_envio: "estado_envio";
    readonly metodo_pago: "metodo_pago";
    readonly direccion_entrega: "direccion_entrega";
};
export type PedidosScalarFieldEnum = (typeof PedidosScalarFieldEnum)[keyof typeof PedidosScalarFieldEnum];
export declare const Detalle_PedidosScalarFieldEnum: {
    readonly id_detalle: "id_detalle";
    readonly id_pedido: "id_pedido";
    readonly id_producto: "id_producto";
    readonly cantidad: "cantidad";
    readonly precio_unitario: "precio_unitario";
};
export type Detalle_PedidosScalarFieldEnum = (typeof Detalle_PedidosScalarFieldEnum)[keyof typeof Detalle_PedidosScalarFieldEnum];
export declare const CarritoScalarFieldEnum: {
    readonly id_carrito: "id_carrito";
    readonly id_usuario: "id_usuario";
    readonly id_producto: "id_producto";
    readonly cantidad: "cantidad";
    readonly fecha_agregado: "fecha_agregado";
};
export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id_usuario: "id_usuario";
    readonly nombre: "nombre";
    readonly correo: "correo";
    readonly contraseña_hash: "contraseña_hash";
    readonly telefono: "telefono";
    readonly rol: "rol";
    readonly fecha_registro: "fecha_registro";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map