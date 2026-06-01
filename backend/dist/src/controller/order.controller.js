import { EstadoPedido } from "../../generated/prisma/client.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/appError.js";
import { orderService } from "../services/order.service.js";
const getUserFromRequest = (req) => {
    if (!req.user) {
        throw new AppError("No autenticado", 401);
    }
    return req.user;
};
export const createOrder = asyncHandler(async (req, res) => {
    const user = getUserFromRequest(req);
    const order = await orderService.createOrder(user.userId, req.body);
    res.status(201).json({
        success: true,
        message: "Pedido creado correctamente",
        data: order,
    });
});
export const getMyOrders = asyncHandler(async (req, res) => {
    const user = getUserFromRequest(req);
    const orders = await orderService.getMyOrders(user.userId);
    res.status(200).json({
        success: true,
        data: orders,
    });
});
export const getAllOrders = asyncHandler(async (_req, res) => {
    const orders = await orderService.getAllOrders();
    res.status(200).json({
        success: true,
        data: orders,
    });
});
export const getOrderById = asyncHandler(async (req, res) => {
    const user = getUserFromRequest(req);
    const id = Number(req.params.id);
    const order = await orderService.getOrderById(id, user.userId, user.rol);
    res.status(200).json({
        success: true,
        data: order,
    });
});
export const cancelOrder = asyncHandler(async (req, res) => {
    const user = getUserFromRequest(req);
    const id = Number(req.params.id);
    await orderService.cancelOrder(id, user.userId);
    res.status(200).json({
        success: true,
        message: "Pedido cancelado correctamente",
    });
});
export const updateOrderStatus = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const { estado } = req.body;
    const updatedOrder = await orderService.updateOrderStatus(id, estado);
    res.status(200).json({
        success: true,
        message: "Estado del pedido actualizado correctamente",
        data: updatedOrder,
    });
});
//# sourceMappingURL=order.controller.js.map