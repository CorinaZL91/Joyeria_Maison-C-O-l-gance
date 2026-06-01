import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/appError.js";
import { cartService } from "../services/cart.service.js";
const getUserIdFromRequest = (req) => {
    if (!req.user) {
        throw new AppError("No autenticado", 401);
    }
    return req.user.userId;
};
const getProductoIdFromParams = (req) => {
    const productoId = Number(req.params.producto_id);
    if (req.params.producto_id === undefined ||
        Number.isNaN(productoId) ||
        !Number.isInteger(productoId) ||
        productoId <= 0) {
        throw new AppError("ID de producto inválido", 400);
    }
    return productoId;
};
export const getCart = asyncHandler(async (req, res) => {
    const usuarioId = getUserIdFromRequest(req);
    const cart = await cartService.getCart(usuarioId);
    res.status(200).json({
        success: true,
        data: cart,
    });
});
export const addToCart = asyncHandler(async (req, res) => {
    const usuarioId = getUserIdFromRequest(req);
    const { cartItem, alreadyExists } = await cartService.addToCart(usuarioId, req.body);
    res.status(alreadyExists ? 200 : 201).json({
        success: true,
        message: alreadyExists
            ? "Cantidad actualizada en el carrito"
            : "Producto agregado al carrito correctamente",
        data: cartItem,
    });
});
export const updateCartItemQuantity = asyncHandler(async (req, res) => {
    const usuarioId = getUserIdFromRequest(req);
    const productoId = getProductoIdFromParams(req);
    const updatedCartItem = await cartService.updateCartItemQuantity(usuarioId, productoId, req.body);
    res.status(200).json({
        success: true,
        message: "Cantidad actualizada correctamente",
        data: updatedCartItem,
    });
});
export const removeCartItem = asyncHandler(async (req, res) => {
    const usuarioId = getUserIdFromRequest(req);
    const productoId = getProductoIdFromParams(req);
    await cartService.removeCartItem(usuarioId, productoId, req.query);
    res.status(200).json({
        success: true,
        message: "Producto eliminado del carrito correctamente",
    });
});
export const clearCart = asyncHandler(async (req, res) => {
    const usuarioId = getUserIdFromRequest(req);
    await cartService.clearCart(usuarioId);
    res.status(200).json({
        success: true,
        message: "Carrito vaciado correctamente",
    });
});
//# sourceMappingURL=cart.controller.js.map