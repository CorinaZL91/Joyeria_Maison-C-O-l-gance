import { prisma } from "../config/prisma.js";
const cartItemInclude = {
    producto: {
        include: {
            categoria: true,
        },
    },
    productoTalla: true,
};
const cartItemWithProductStockInclude = {
    producto: {
        include: {
            tallas: true,
            categoria: true,
        },
    },
    productoTalla: true,
};
export const cartRepository = {
    findCartByUserId: async (usuarioId) => {
        return prisma.carrito.findMany({
            where: {
                usuario_id: usuarioId,
            },
            include: cartItemInclude,
            orderBy: {
                id: "desc",
            },
        });
    },
    findProductByIdWithTallas: async (productoId) => {
        return prisma.producto.findUnique({
            where: { id: productoId },
            include: {
                tallas: true,
            },
        });
    },
    findCartItem: async (usuarioId, productoId, productoTallaId) => {
        return prisma.carrito.findFirst({
            where: {
                usuario_id: usuarioId,
                producto_id: productoId,
                producto_talla_id: productoTallaId,
            },
        });
    },
    findCartItemWithProductStock: async (usuarioId, productoId, productoTallaId) => {
        return prisma.carrito.findFirst({
            where: {
                usuario_id: usuarioId,
                producto_id: productoId,
                producto_talla_id: productoTallaId,
            },
            include: cartItemWithProductStockInclude,
        });
    },
    createCartItem: async (usuarioId, productoId, productoTallaId, cantidad) => {
        return prisma.carrito.create({
            data: {
                usuario_id: usuarioId,
                producto_id: productoId,
                producto_talla_id: productoTallaId,
                cantidad,
            },
            include: cartItemInclude,
        });
    },
    updateCartItemQuantity: async (cartItemId, cantidad) => {
        return prisma.carrito.update({
            where: {
                id: cartItemId,
            },
            data: {
                cantidad,
            },
            include: cartItemInclude,
        });
    },
    deleteCartItem: async (cartItemId) => {
        return prisma.carrito.delete({
            where: {
                id: cartItemId,
            },
        });
    },
    clearCartByUserId: async (usuarioId) => {
        return prisma.carrito.deleteMany({
            where: {
                usuario_id: usuarioId,
            },
        });
    },
};
//# sourceMappingURL=cart.repository.js.map