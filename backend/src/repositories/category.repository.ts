import { prisma } from "../config/prisma.js";

export const categoryRepository = {
  findAll: async () => {
    return prisma.categoria.findMany({
      orderBy: {
        nombre: "asc",
      },
    });
  },

  findById: async (id: number) => {
    return prisma.categoria.findUnique({
      where: { id },
    });
  },

  findByIdWithProducts: async (id: number) => {
    return prisma.categoria.findUnique({
      where: { id },
      include: {
        productos: true,
      },
    });
  },

  findByName: async (nombre: string) => {
    return prisma.categoria.findUnique({
      where: {
        nombre,
      },
    });
  },

  findByNameExceptId: async (nombre: string, id: number) => {
    return prisma.categoria.findFirst({
      where: {
        nombre,
        NOT: {
          id,
        },
      },
    });
  },

  create: async (data: { nombre: string; descripcion: string | null }) => {
    return prisma.categoria.create({
      data,
    });
  },

  update: async (
    id: number,
    data: { nombre?: string; descripcion?: string | null }
  ) => {
    return prisma.categoria.update({
      where: { id },
      data,
    });
  },

  delete: async (id: number) => {
    return prisma.categoria.delete({
      where: { id },
    });
  },
};