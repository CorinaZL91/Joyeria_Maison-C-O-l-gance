import type { CreateCategoryInput, UpdateCategoryInput } from "../validators/category.schemas.js";
export declare const categoryService: {
    getCategories: () => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }[]>;
    getCategoryById: (id: number) => Promise<{
        productos: {
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
        }[];
    } & {
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
    createCategory: (body: CreateCategoryInput) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
    updateCategory: (id: number, body: UpdateCategoryInput) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
    deleteCategory: (id: number) => Promise<void>;
};
//# sourceMappingURL=category.service.d.ts.map