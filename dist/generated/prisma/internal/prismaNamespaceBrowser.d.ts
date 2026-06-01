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
    readonly Usuario: "Usuario";
    readonly Categoria: "Categoria";
    readonly Producto: "Producto";
    readonly ProductoTalla: "ProductoTalla";
    readonly Pedido: "Pedido";
    readonly DetallePedido: "DetallePedido";
    readonly Carrito: "Carrito";
    readonly AlertaStock: "AlertaStock";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly correo: "correo";
    readonly password_hash: "password_hash";
    readonly rol: "rol";
    readonly telefono: "telefono";
    readonly direccion: "direccion";
    readonly direccion_calle: "direccion_calle";
    readonly direccion_ciudad: "direccion_ciudad";
    readonly direccion_codigo_postal: "direccion_codigo_postal";
    readonly fecha_registro: "fecha_registro";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const ProductoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly precio: "precio";
    readonly material: "material";
    readonly usar_tallas: "usar_tallas";
    readonly stock: "stock";
    readonly stock_minimo: "stock_minimo";
    readonly imagen_url: "imagen_url";
    readonly imagen_public_id: "imagen_public_id";
    readonly activo: "activo";
    readonly fecha_creacion: "fecha_creacion";
    readonly categoria_id: "categoria_id";
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const ProductoTallaScalarFieldEnum: {
    readonly id: "id";
    readonly talla: "talla";
    readonly stock: "stock";
    readonly activo: "activo";
    readonly fecha_creada: "fecha_creada";
    readonly producto_id: "producto_id";
};
export type ProductoTallaScalarFieldEnum = (typeof ProductoTallaScalarFieldEnum)[keyof typeof ProductoTallaScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly fecha_pedido: "fecha_pedido";
    readonly total: "total";
    readonly metodo_pago: "metodo_pago";
    readonly estado: "estado";
    readonly direccion_calle: "direccion_calle";
    readonly direccion_ciudad: "direccion_ciudad";
    readonly direccion_codigo_postal: "direccion_codigo_postal";
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const DetallePedidoScalarFieldEnum: {
    readonly id: "id";
    readonly pedido_id: "pedido_id";
    readonly producto_id: "producto_id";
    readonly producto_talla_id: "producto_talla_id";
    readonly talla: "talla";
    readonly cantidad: "cantidad";
    readonly precio_unitario: "precio_unitario";
    readonly subtotal: "subtotal";
};
export type DetallePedidoScalarFieldEnum = (typeof DetallePedidoScalarFieldEnum)[keyof typeof DetallePedidoScalarFieldEnum];
export declare const CarritoScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly producto_id: "producto_id";
    readonly producto_talla_id: "producto_talla_id";
    readonly cantidad: "cantidad";
    readonly fecha_agregado: "fecha_agregado";
};
export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum];
export declare const AlertaStockScalarFieldEnum: {
    readonly id: "id";
    readonly producto_id: "producto_id";
    readonly producto_talla_id: "producto_talla_id";
    readonly talla: "talla";
    readonly stock_minimo: "stock_minimo";
    readonly mensaje: "mensaje";
    readonly activa: "activa";
    readonly fecha_alerta: "fecha_alerta";
    readonly fecha_update: "fecha_update";
};
export type AlertaStockScalarFieldEnum = (typeof AlertaStockScalarFieldEnum)[keyof typeof AlertaStockScalarFieldEnum];
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