import { AppError } from "../utils/appError.js";
import { cartRepository } from "../repositories/cart.repository.js";
const formatCartItem = (item) => {
    const subtotal = Number(item.producto.precio) * item.cantidad;
    return {
        ...item,
        producto_talla: item.productoTalla ?? null,
        subtotal,
    };
};
export const cartService = {
    getCart: async (usuarioId) => {
        const cartItems = await cartRepository.findCartByUserId(usuarioId);
        const formattedItems = cartItems.map(formatCartItem);
        const total = formattedItems.reduce((acc, item) => acc + item.subtotal, 0);
        return {
            items: formattedItems,
            total,
        };
    },
    addToCart: async (usuarioId, body) => {
        const productoId = body.producto_id;
        const cantidad = body.cantidad;
        const productoTallaId = body.producto_talla_id ?? null;
        const producto = await cartRepository.findProductByIdWithTallas(productoId);
        if (!producto || !producto.activo) {
            throw new AppError("Producto no encontrado o inactivo", 404);
        }
        let stockDisponible = 0;
        if (producto.usar_tallas) {
            if (productoTallaId === null) {
                throw new AppError("Debes seleccionar una talla", 400);
            }
            const talla = producto.tallas.find((item) => item.id === productoTallaId && item.activo);
            if (!talla) {
                throw new AppError("Talla no válida", 400);
            }
            if (talla.stock <= 0) {
                throw new AppError("Esa talla no tiene stock disponible", 400);
            }
            stockDisponible = talla.stock;
        }
        else {
            if (productoTallaId !== null) {
                throw new AppError("Este producto no usa tallas, no debes enviar producto_talla_id", 400);
            }
            if (producto.stock === null || producto.stock <= 0) {
                throw new AppError("Producto sin stock", 400);
            }
            stockDisponible = producto.stock;
        }
        const existingCartItem = await cartRepository.findCartItem(usuarioId, productoId, productoTallaId);
        const nuevaCantidad = existingCartItem
            ? existingCartItem.cantidad + cantidad
            : cantidad;
        if (nuevaCantidad > stockDisponible) {
            throw new AppError(`La cantidad solicitada excede el stock disponible. Solo hay ${stockDisponible} pieza(s).`, 400);
        }
        const cartItem = existingCartItem
            ? await cartRepository.updateCartItemQuantity(existingCartItem.id, nuevaCantidad)
            : await cartRepository.createCartItem(usuarioId, productoId, productoTallaId, cantidad);
        return {
            cartItem: formatCartItem(cartItem),
            alreadyExists: Boolean(existingCartItem),
        };
    },
    updateCartItemQuantity: async (usuarioId, productoId, body) => {
        const cantidad = body.cantidad;
        const productoTallaId = body.producto_talla_id ?? null;
        const cartItem = await cartRepository.findCartItemWithProductStock(usuarioId, productoId, productoTallaId);
        if (!cartItem) {
            throw new AppError("Producto no encontrado en el carrito", 404);
        }
        let stockDisponible = 0;
        if (cartItem.producto.usar_tallas) {
            if (!cartItem.productoTalla || !cartItem.productoTalla.activo) {
                throw new AppError("La talla seleccionada ya no está disponible", 400);
            }
            stockDisponible = cartItem.productoTalla.stock;
        }
        else {
            if (cartItem.producto.stock === null || cartItem.producto.stock <= 0) {
                throw new AppError("Producto sin stock disponible", 400);
            }
            stockDisponible = cartItem.producto.stock;
        }
        if (cantidad > stockDisponible) {
            throw new AppError(`La cantidad solicitada excede el stock disponible. Solo hay ${stockDisponible} pieza(s).`, 400);
        }
        const updatedCartItem = await cartRepository.updateCartItemQuantity(cartItem.id, cantidad);
        return formatCartItem(updatedCartItem);
    },
    removeCartItem: async (usuarioId, productoId, query) => {
        const productoTallaId = query.producto_talla_id ?? null;
        const cartItem = await cartRepository.findCartItem(usuarioId, productoId, productoTallaId);
        if (!cartItem) {
            throw new AppError("Producto no encontrado en el carrito", 404);
        }
        await cartRepository.deleteCartItem(cartItem.id);
    },
    clearCart: async (usuarioId) => {
        await cartRepository.clearCartByUserId(usuarioId);
    },
};
//# sourceMappingURL=cart.service.js.map