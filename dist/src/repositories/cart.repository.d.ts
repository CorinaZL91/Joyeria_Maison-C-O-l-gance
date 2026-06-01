export declare const cartRepository: {
    findCartByUserId: (usuarioId: number) => Promise<({
        producto: {
            categoria: {
                nombre: string;
                id: number;
                descripcion: string | null;
            };
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
        };
        productoTalla: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
        } | null;
    } & {
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    })[]>;
    findProductByIdWithTallas: (productoId: number) => Promise<({
        tallas: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
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
    findCartItem: (usuarioId: number, productoId: number, productoTallaId: number | null) => Promise<{
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    } | null>;
    findCartItemWithProductStock: (usuarioId: number, productoId: number, productoTallaId: number | null) => Promise<({
        producto: {
            categoria: {
                nombre: string;
                id: number;
                descripcion: string | null;
            };
            tallas: {
                id: number;
                stock: number;
                activo: boolean;
                talla: string;
                producto_id: number;
                fecha_creada: Date;
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
        };
        productoTalla: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
        } | null;
    } & {
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    }) | null>;
    createCartItem: (usuarioId: number, productoId: number, productoTallaId: number | null, cantidad: number) => Promise<{
        producto: {
            categoria: {
                nombre: string;
                id: number;
                descripcion: string | null;
            };
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
        };
        productoTalla: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
        } | null;
    } & {
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    }>;
    updateCartItemQuantity: (cartItemId: number, cantidad: number) => Promise<{
        producto: {
            categoria: {
                nombre: string;
                id: number;
                descripcion: string | null;
            };
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
        };
        productoTalla: {
            id: number;
            stock: number;
            activo: boolean;
            talla: string;
            producto_id: number;
            fecha_creada: Date;
        } | null;
    } & {
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    }>;
    deleteCartItem: (cartItemId: number) => Promise<{
        id: number;
        cantidad: number;
        producto_id: number;
        producto_talla_id: number | null;
        usuario_id: number;
        fecha_agregado: Date;
    }>;
    clearCartByUserId: (usuarioId: number) => Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
};
//# sourceMappingURL=cart.repository.d.ts.map