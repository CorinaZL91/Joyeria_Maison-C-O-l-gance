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
  findCartByUserId: async (usuarioId: number) => {
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

  findProductByIdWithTallas: async (productoId: number) => {
    return prisma.producto.findUnique({
      where: { id: productoId },
      include: {
        tallas: true,
      },
    });
  },

  findCartItem: async (
    usuarioId: number,
    productoId: number,
    productoTallaId: number | null
  ) => {
    return prisma.carrito.findFirst({
      where: {
        usuario_id: usuarioId,
        producto_id: productoId,
        producto_talla_id: productoTallaId,
      },
    });
  },

  findCartItemWithProductStock: async (
    usuarioId: number,
    productoId: number,
    productoTallaId: number | null
  ) => {
    return prisma.carrito.findFirst({
      where: {
        usuario_id: usuarioId,
        producto_id: productoId,
        producto_talla_id: productoTallaId,
      },
      include: cartItemWithProductStockInclude,
    });
  },

  createCartItem: async (
    usuarioId: number,
    productoId: number,
    productoTallaId: number | null,
    cantidad: number
  ) => {
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

  updateCartItemQuantity: async (cartItemId: number, cantidad: number) => {
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

  deleteCartItem: async (cartItemId: number) => {
    return prisma.carrito.delete({
      where: {
        id: cartItemId,
      },
    });
  },

  clearCartByUserId: async (usuarioId: number) => {
    return prisma.carrito.deleteMany({
      where: {
        usuario_id: usuarioId,
      },
    });
  },
};