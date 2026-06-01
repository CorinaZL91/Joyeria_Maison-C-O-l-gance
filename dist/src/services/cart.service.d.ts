import type { AddToCartInput, UpdateCartItemQuantityInput, RemoveCartItemQueryInput } from "../validators/cart.schemas.js";
export declare const cartService: {
    getCart: (usuarioId: number) => Promise<{
        items: any[];
        total: any;
    }>;
    addToCart: (usuarioId: number, body: AddToCartInput) => Promise<{
        cartItem: any;
        alreadyExists: boolean;
    }>;
    updateCartItemQuantity: (usuarioId: number, productoId: number, body: UpdateCartItemQuantityInput) => Promise<any>;
    removeCartItem: (usuarioId: number, productoId: number, query: RemoveCartItemQueryInput) => Promise<void>;
    clearCart: (usuarioId: number) => Promise<void>;
};
//# sourceMappingURL=cart.service.d.ts.map