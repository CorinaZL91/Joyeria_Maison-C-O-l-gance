export declare const categoryRepository: {
    findAll: () => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }[]>;
    findById: (id: number) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    } | null>;
    findByIdWithProducts: (id: number) => Promise<({
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
    }) | null>;
    findByName: (nombre: string) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    } | null>;
    findByNameExceptId: (nombre: string, id: number) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    } | null>;
    create: (data: {
        nombre: string;
        descripcion: string | null;
    }) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
    update: (id: number, data: {
        nombre?: string;
        descripcion?: string | null;
    }) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
    delete: (id: number) => Promise<{
        nombre: string;
        id: number;
        descripcion: string | null;
    }>;
};
//# sourceMappingURL=category.repository.d.ts.map