import { Prisma } from "../../generated/prisma/client.js";
export declare const productRepository: {
    findPublicProducts: (where: Prisma.ProductoWhereInput) => Promise<({
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    })[]>;
    findAdminProducts: (where: Prisma.ProductoWhereInput) => Promise<({
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    })[]>;
    findByIdPublic: (id: number) => Promise<({
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }) | null>;
    findByIdAdmin: (id: number) => Promise<({
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }) | null>;
    findById: (id: number) => Promise<{
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
    } | null>;
    findByIdWithTallas: (id: number) => Promise<({
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }) | null>;
    findCategoryById: (id: number) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    } | null>;
    findActiveProductByName: (nombre: string) => Promise<{
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
    } | null>;
    findProductByNameExceptId: (nombre: string, id: number) => Promise<{
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
    } | null>;
    createProduct: (data: Prisma.ProductoCreateInput) => Promise<{
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }>;
    updateProduct: (id: number, data: Prisma.ProductoUpdateInput, shouldDeleteTallas: boolean) => Promise<{
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }>;
    deactivateById: (id: number) => Promise<{
        categoria: {
            nombre: string;
            id: number;
            descripcion: string | null;
        };
        tallas: {
            id: number;
            stock: number;
            talla: string;
            producto_id: number;
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
    }>;
};
//# sourceMappingURL=product.repository.d.ts.map