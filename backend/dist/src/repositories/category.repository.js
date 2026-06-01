import { prisma } from "../config/prisma.js";
export const categoryRepository = {
    findAll: async () => {
        return prisma.categoria.findMany({
            orderBy: {
                nombre: "asc",
            },
        });
    },
    findById: async (id) => {
        return prisma.categoria.findUnique({
            where: { id },
        });
    },
    findByIdWithProducts: async (id) => {
        return prisma.categoria.findUnique({
            where: { id },
            include: {
                productos: true,
            },
        });
    },
    findByName: async (nombre) => {
        return prisma.categoria.findUnique({
            where: {
                nombre,
            },
        });
    },
    findByNameExceptId: async (nombre, id) => {
        return prisma.categoria.findFirst({
            where: {
                nombre,
                NOT: {
                    id,
                },
            },
        });
    },
    create: async (data) => {
        return prisma.categoria.create({
            data,
        });
    },
    update: async (id, data) => {
        return prisma.categoria.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        return prisma.categoria.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=category.repository.js.map