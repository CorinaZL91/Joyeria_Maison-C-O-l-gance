import { EstadoPedido, Prisma } from "../../generated/prisma/client.js";
export declare const orderRepository: {
    findUserAddressById: (userId: number) => Promise<{
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
    } | null>;
    updateUserAddress: (userId: number, data: {
        direccion_calle: string;
        direccion_ciudad: string;
        direccion_codigo_postal: string;
    }) => Promise<{
        nombre: string;
        correo: string;
        password_hash: string;
        rol: import("../../generated/prisma/enums.js").RolUsuario;
        telefono: string | null;
        direccion: string | null;
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        fecha_registro: Date;
        id: number;
    }>;
    findCartItemsForOrder: (userId: number) => Promise<({
        producto: {
            tallas: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
            }[];
        } & {
            nombre: string;
            id: number;
            descripcion: string;
            precio: import("@prisma/client-runtime-utils").Decimal;
            material: string;
            usar_tallas: boolean;
            stock: number | null;
            stock_minimo: number;
            imagen_url: string | null;
            imagen_public_id: string | null;
            activo: boolean;
            fecha_creacion: Date;
            categoria_id: number;
        };
        productoTalla: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
        } | null;
    } & {
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    })[]>;
    createOrderFromCart: (userId: number, data: {
        total: number;
        metodo_pago: Prisma.PedidoCreateInput["metodo_pago"];
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
    }, cartItems: any[]) => Promise<{
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    }>;
    findOrderById: (id: number) => Promise<({
        usuario: {
            nombre: string;
            correo: string;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
        detalles: ({
            producto: {
                categoria: {
                    nombre: string;
                    id: number;
                    descripcion: string | null;
                };
            } & {
                nombre: string;
                id: number;
                descripcion: string;
                precio: import("@prisma/client-runtime-utils").Decimal;
                material: string;
                usar_tallas: boolean;
                stock: number | null;
                stock_minimo: number;
                imagen_url: string | null;
                imagen_public_id: string | null;
                activo: boolean;
                fecha_creacion: Date;
                categoria_id: number;
            };
            productoTalla: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
            } | null;
        } & {
            id: number;
            talla: string | null;
            cantidad: number;
            precio_unitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            pedido_id: number;
            producto_id: number;
            producto_talla_id: number | null;
        })[];
    } & {
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    }) | null>;
    findOrderByIdWithDetails: (id: number) => Promise<({
        detalles: {
            id: number;
            talla: string | null;
            cantidad: number;
            precio_unitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            pedido_id: number;
            producto_id: number;
            producto_talla_id: number | null;
        }[];
    } & {
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    }) | null>;
    findOrderWithRelations: (id: number) => Promise<({
        usuario: {
            nombre: string;
            correo: string;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
        detalles: ({
            producto: {
                nombre: string;
                id: number;
                descripcion: string;
                precio: import("@prisma/client-runtime-utils").Decimal;
                material: string;
                usar_tallas: boolean;
                stock: number | null;
                stock_minimo: number;
                imagen_url: string | null;
                imagen_public_id: string | null;
                activo: boolean;
                fecha_creacion: Date;
                categoria_id: number;
            };
            productoTalla: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
            } | null;
        } & {
            id: number;
            talla: string | null;
            cantidad: number;
            precio_unitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            pedido_id: number;
            producto_id: number;
            producto_talla_id: number | null;
        })[];
    } & {
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    }) | null>;
    findOrdersByUserId: (userId: number) => Promise<({
        usuario: {
            nombre: string;
            correo: string;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
        detalles: ({
            producto: {
                nombre: string;
                id: number;
                descripcion: string;
                precio: import("@prisma/client-runtime-utils").Decimal;
                material: string;
                usar_tallas: boolean;
                stock: number | null;
                stock_minimo: number;
                imagen_url: string | null;
                imagen_public_id: string | null;
                activo: boolean;
                fecha_creacion: Date;
                categoria_id: number;
            };
            productoTalla: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
            } | null;
        } & {
            id: number;
            talla: string | null;
            cantidad: number;
            precio_unitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            pedido_id: number;
            producto_id: number;
            producto_talla_id: number | null;
        })[];
    } & {
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    })[]>;
    findAllOrders: () => Promise<({
        usuario: {
            nombre: string;
            correo: string;
            telefono: string | null;
            direccion: string | null;
            direccion_calle: string | null;
            direccion_ciudad: string | null;
            direccion_codigo_postal: string | null;
            id: number;
        };
        detalles: ({
            producto: {
                nombre: string;
                id: number;
                descripcion: string;
                precio: import("@prisma/client-runtime-utils").Decimal;
                material: string;
                usar_tallas: boolean;
                stock: number | null;
                stock_minimo: number;
                imagen_url: string | null;
                imagen_public_id: string | null;
                activo: boolean;
                fecha_creacion: Date;
                categoria_id: number;
            };
            productoTalla: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
            } | null;
        } & {
            id: number;
            talla: string | null;
            cantidad: number;
            precio_unitario: import("@prisma/client-runtime-utils").Decimal;
            subtotal: import("@prisma/client-runtime-utils").Decimal;
            pedido_id: number;
            producto_id: number;
            producto_talla_id: number | null;
        })[];
    } & {
        direccion_calle: string | null;
        direccion_ciudad: string | null;
        direccion_codigo_postal: string | null;
        id: number;
        usuario_id: number;
        metodo_pago: import("../../generated/prisma/enums.js").MetodoPago;
        fecha_pedido: Date;
        total: import("@prisma/client-runtime-utils").Decimal;
        estado: EstadoPedido;
    })[]>;
    cancelOrderAndRestoreStock: (id: number, detalles: any[]) => Promise<void>;
    updateOrderStatus: (id: number, estado: EstadoPedido, detalles: any[]) => Promise<void>;
};
//# sourceMappingURL=order.repository.d.ts.map