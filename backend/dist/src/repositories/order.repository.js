import { EstadoPedido, Prisma, } from "../../generated/prisma/client.js";
import { prisma } from "../config/prisma.js";
const userSelect = {
    id: true,
    nombre: true,
    correo: true,
    telefono: true,
    direccion: true,
    direccion_calle: true,
    direccion_ciudad: true,
    direccion_codigo_postal: true,
};
const orderInclude = {
    usuario: {
        select: userSelect,
    },
    detalles: {
        include: {
            producto: true,
            productoTalla: true,
        },
    },
};
const orderDetailInclude = {
    usuario: {
        select: userSelect,
    },
    detalles: {
        include: {
            producto: {
                include: {
                    categoria: true,
                },
            },
            productoTalla: true,
        },
    },
};
export const orderRepository = {
    findUserAddressById: async (userId) => {
        return prisma.usuario.findUnique({
            where: { id: userId },
            select: {
                id: true,
                direccion_calle: true,
                direccion_ciudad: true,
                direccion_codigo_postal: true,
            },
        });
    },
    updateUserAddress: async (userId, data) => {
        return prisma.usuario.update({
            where: { id: userId },
            data,
        });
    },
    findCartItemsForOrder: async (userId) => {
        return prisma.carrito.findMany({
            where: {
                usuario_id: userId,
            },
            include: {
                producto: {
                    include: {
                        tallas: true,
                    },
                },
                productoTalla: true,
            },
        });
    },
    createOrderFromCart: async (userId, data, cartItems) => {
        return prisma.$transaction(async (tx) => {
            const createdOrder = await tx.pedido.create({
                data: {
                    usuario_id: userId,
                    total: data.total,
                    metodo_pago: data.metodo_pago,
                    estado: EstadoPedido.pendiente,
                    direccion_calle: data.direccion_calle,
                    direccion_ciudad: data.direccion_ciudad,
                    direccion_codigo_postal: data.direccion_codigo_postal,
                },
            });
            for (const item of cartItems) {
                const productoActual = await tx.producto.findUnique({
                    where: {
                        id: item.producto_id,
                    },
                });
                if (!productoActual) {
                    throw new Error(`PRODUCT_NOT_FOUND:${item.producto_id}`);
                }
                if (!productoActual.activo) {
                    throw new Error(`PRODUCT_INACTIVE:${productoActual.nombre}`);
                }
                let tallaActual = null;
                if (productoActual.usar_tallas) {
                    if (!item.producto_talla_id) {
                        throw new Error(`SIZE_REQUIRED:${productoActual.nombre}`);
                    }
                    tallaActual = await tx.productoTalla.findUnique({
                        where: {
                            id: item.producto_talla_id,
                        },
                    });
                    if (!tallaActual || !tallaActual.activo) {
                        throw new Error(`SIZE_UNAVAILABLE:${productoActual.nombre}`);
                    }
                    if (tallaActual.producto_id !== productoActual.id) {
                        throw new Error(`SIZE_PRODUCT_MISMATCH:${productoActual.nombre}`);
                    }
                    if (tallaActual.stock < item.cantidad) {
                        throw new Error(`SIZE_STOCK_INSUFFICIENT:${productoActual.nombre}:${tallaActual.talla}`);
                    }
                }
                else {
                    if (productoActual.stock === null ||
                        productoActual.stock < item.cantidad) {
                        throw new Error(`STOCK_INSUFFICIENT:${productoActual.nombre}`);
                    }
                }
                const precioUnitario = Number(productoActual.precio.toFixed(2));
                const subtotalDetalle = Number((precioUnitario * item.cantidad).toFixed(2));
                await tx.detallePedido.create({
                    data: {
                        pedido_id: createdOrder.id,
                        producto_id: item.producto_id,
                        producto_talla_id: item.producto_talla_id,
                        talla: productoActual.usar_tallas
                            ? tallaActual?.talla ?? null
                            : null,
                        cantidad: item.cantidad,
                        precio_unitario: precioUnitario,
                        subtotal: subtotalDetalle,
                    },
                });
                if (productoActual.usar_tallas) {
                    await tx.productoTalla.update({
                        where: {
                            id: item.producto_talla_id,
                        },
                        data: {
                            stock: {
                                decrement: item.cantidad,
                            },
                        },
                    });
                }
                else {
                    await tx.producto.update({
                        where: {
                            id: item.producto_id,
                        },
                        data: {
                            stock: {
                                decrement: item.cantidad,
                            },
                        },
                    });
                }
            }
            await tx.carrito.deleteMany({
                where: {
                    usuario_id: userId,
                },
            });
            return createdOrder;
        });
    },
    findOrderById: async (id) => {
        return prisma.pedido.findUnique({
            where: { id },
            include: orderDetailInclude,
        });
    },
    findOrderByIdWithDetails: async (id) => {
        return prisma.pedido.findUnique({
            where: { id },
            include: {
                detalles: true,
            },
        });
    },
    findOrderWithRelations: async (id) => {
        return prisma.pedido.findUnique({
            where: { id },
            include: orderInclude,
        });
    },
    findOrdersByUserId: async (userId) => {
        return prisma.pedido.findMany({
            where: {
                usuario_id: userId,
            },
            include: orderInclude,
            orderBy: {
                fecha_pedido: "desc",
            },
        });
    },
    findAllOrders: async () => {
        return prisma.pedido.findMany({
            include: orderInclude,
            orderBy: {
                fecha_pedido: "desc",
            },
        });
    },
    cancelOrderAndRestoreStock: async (id, detalles) => {
        return prisma.$transaction(async (tx) => {
            await tx.pedido.update({
                where: { id },
                data: {
                    estado: EstadoPedido.cancelado,
                },
            });
            for (const detalle of detalles) {
                if (detalle.producto_talla_id !== null) {
                    await tx.productoTalla.update({
                        where: {
                            id: detalle.producto_talla_id,
                        },
                        data: {
                            stock: {
                                increment: detalle.cantidad,
                            },
                        },
                    });
                }
                else {
                    await tx.producto.update({
                        where: {
                            id: detalle.producto_id,
                        },
                        data: {
                            stock: {
                                increment: detalle.cantidad,
                            },
                        },
                    });
                }
            }
        });
    },
    updateOrderStatus: async (id, estado, detalles) => {
        return prisma.$transaction(async (tx) => {
            await tx.pedido.update({
                where: { id },
                data: {
                    estado,
                },
            });
            if (estado === EstadoPedido.cancelado) {
                for (const detalle of detalles) {
                    if (detalle.producto_talla_id !== null) {
                        await tx.productoTalla.update({
                            where: {
                                id: detalle.producto_talla_id,
                            },
                            data: {
                                stock: {
                                    increment: detalle.cantidad,
                                },
                            },
                        });
                    }
                    else {
                        await tx.producto.update({
                            where: {
                                id: detalle.producto_id,
                            },
                            data: {
                                stock: {
                                    increment: detalle.cantidad,
                                },
                            },
                        });
                    }
                }
            }
        });
    },
};
//# sourceMappingURL=order.repository.js.map