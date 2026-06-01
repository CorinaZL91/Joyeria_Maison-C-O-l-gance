import type { CreateProductInput, UpdateProductInput, ProductQueryInput } from "../validators/product.schemas.js";
type UploadedFile = {
    buffer: Buffer;
};
export declare const productService: {
    getProducts: (query: ProductQueryInput) => Promise<({
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
    getAdminProducts: (query: ProductQueryInput) => Promise<({
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
    getProductById: (id: number, isAdminView: boolean) => Promise<{
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
    createProduct: (body: CreateProductInput, file?: UploadedFile) => Promise<{
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
    updateProduct: (id: number, body: UpdateProductInput, file?: UploadedFile) => Promise<{
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
    deleteProduct: (id: number) => Promise<{
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
export {};
//# sourceMappingURL=product.service.d.ts.map