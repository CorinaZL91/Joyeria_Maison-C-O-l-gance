import { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../config/prisma.js";

const tallasSelect = {
  id: true,
  producto_id: true,
  talla: true,
  stock: true,
  activo: true,
};

const publicProductInclude = {
  categoria: true,
  tallas: {
    where: {
      activo: true,
      stock: {
        gt: 0,
      },
    },
    select: tallasSelect,
    orderBy: {
      id: "asc" as const,
    },
  },
};

const adminProductInclude = {
  categoria: true,
  tallas: {
    select: tallasSelect,
    orderBy: {
      id: "asc" as const,
    },
  },
};

export const productRepository = {
  findPublicProducts: async (where: Prisma.ProductoWhereInput) => {
    try {
      return await prisma.producto.findMany({
        where,
        include: publicProductInclude,
        orderBy: {
          id: "desc",
        },
      });
    } catch (error) {
      console.error("ERROR EN findPublicProducts:", error);
      throw error;
    }
  },

  findAdminProducts: async (where: Prisma.ProductoWhereInput) => {
    try {
      return await prisma.producto.findMany({
        where,
        include: adminProductInclude,
        orderBy: {
          id: "desc",
        },
      });
    } catch (error) {
      console.error("ERROR EN findAdminProducts:", error);
      throw error;
    }
  },

  findByIdPublic: async (id: number) => {
    try {
      return await prisma.producto.findUnique({
        where: {
          id,
        },
        include: publicProductInclude,
      });
    } catch (error) {
      console.error("ERROR EN findByIdPublic:", error);
      throw error;
    }
  },

  findByIdAdmin: async (id: number) => {
    try {
      return await prisma.producto.findUnique({
        where: {
          id,
        },
        include: adminProductInclude,
      });
    } catch (error) {
      console.error("ERROR EN findByIdAdmin:", error);
      throw error;
    }
  },

  findById: async (id: number) => {
    return prisma.producto.findUnique({
      where: {
        id,
      },
    });
  },

  findByIdWithTallas: async (id: number) => {
    return prisma.producto.findUnique({
      where: {
        id,
      },
      include: {
        tallas: {
          select: tallasSelect,
          orderBy: {
            id: "asc" as const,
          },
        },
      },
    });
  },

  findCategoryById: async (id: number) => {
    return prisma.categoria.findUnique({
      where: {
        id,
      },
    });
  },

  findActiveProductByName: async (nombre: string) => {
    return prisma.producto.findFirst({
      where: {
        nombre,
        activo: true,
      },
    });
  },

  findProductByNameExceptId: async (nombre: string, id: number) => {
    return prisma.producto.findFirst({
      where: {
        nombre,
        NOT: {
          id,
        },
      },
    });
  },

  createProduct: async (data: Prisma.ProductoCreateInput) => {
    return prisma.$transaction(async (tx) => {
      return tx.producto.create({
        data,
        include: adminProductInclude,
      });
    });
  },

  updateProduct: async (
    id: number,
    data: Prisma.ProductoUpdateInput,
    shouldDeleteTallas: boolean
  ) => {
    return prisma.$transaction(async (tx) => {
      if (shouldDeleteTallas) {
        await tx.productoTalla.deleteMany({
          where: {
            producto_id: id,
          },
        });
      }

      return tx.producto.update({
        where: {
          id,
        },
        data,
        include: adminProductInclude,
      });
    });
  },

  deactivateById: async (id: number) => {
    return prisma.producto.update({
      where: {
        id,
      },
      data: {
        activo: false,
      },
      include: adminProductInclude,
    });
  },
};
