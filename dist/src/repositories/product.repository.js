import { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../config/prisma.js";
const tallasSelect = {
    id: true,
    producto_id: true,
    talla: true,
    stock: true,
};
const productInclude = {
    categoria: true,
    tallas: {
        select: tallasSelect,
        orderBy: {
            id: "asc",
        },
    },
};
const adminProductInclude = {
    categoria: true,
    tallas: {
        select: tallasSelect,
        orderBy: {
            id: "asc",
        },
    },
};
export const productRepository = {
    findPublicProducts: async (where) => {
        return prisma.producto.findMany({
            where,
            include: productInclude,
            orderBy: {
                id: "desc",
            },
        });
    },
    findAdminProducts: async (where) => {
        return prisma.producto.findMany({
            where,
            include: adminProductInclude,
            orderBy: {
                id: "desc",
            },
        });
    },
    findByIdPublic: async (id) => {
        return prisma.producto.findUnique({
            where: { id },
            include: productInclude,
        });
    },
    findByIdAdmin: async (id) => {
        return prisma.producto.findUnique({
            where: { id },
            include: adminProductInclude,
        });
    },
    findById: async (id) => {
        return prisma.producto.findUnique({
            where: { id },
        });
    },
    findByIdWithTallas: async (id) => {
        return prisma.producto.findUnique({
            where: { id },
            include: {
                tallas: {
                    select: tallasSelect,
                    orderBy: {
                        id: "asc",
                    },
                },
            },
        });
    },
    findCategoryById: async (id) => {
        return prisma.categoria.findUnique({
            where: { id },
        });
    },
    findActiveProductByName: async (nombre) => {
        return prisma.producto.findFirst({
            where: {
                nombre,
                activo: true,
            },
        });
    },
    findProductByNameExceptId: async (nombre, id) => {
        return prisma.producto.findFirst({
            where: {
                nombre,
                NOT: {
                    id,
                },
            },
        });
    },
    createProduct: async (data) => {
        return prisma.$transaction(async (tx) => {
            return tx.producto.create({
                data,
                include: adminProductInclude,
            });
        });
    },
    updateProduct: async (id, data, shouldDeleteTallas) => {
        return prisma.$transaction(async (tx) => {
            if (shouldDeleteTallas) {
                await tx.productoTalla.deleteMany({
                    where: {
                        producto_id: id,
                    },
                });
            }
            return tx.producto.update({
                where: { id },
                data,
                include: adminProductInclude,
            });
        });
    },
    deactivateById: async (id) => {
        return prisma.producto.update({
            where: { id },
            data: {
                activo: false,
            },
            include: adminProductInclude,
        });
    },
};
//# sourceMappingURL=product.repository.js.map