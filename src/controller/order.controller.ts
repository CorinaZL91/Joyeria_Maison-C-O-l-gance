import type { Request, Response } from "express";
import { EstadoPedido } from "../../generated/prisma/client.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/appError.js";
import { orderService } from "../services/order.service.js";

const getUserFromRequest = (req: Request) => {
  if (!req.user) {
    throw new AppError("No autenticado", 401);
  }

  return req.user;
};

export const createOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const user = getUserFromRequest(req);

    const order = await orderService.createOrder(user.userId, req.body);

    res.status(201).json({
      success: true,
      message: "Pedido creado correctamente",
      data: order,
    });
  }
);

export const getMyOrders = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const user = getUserFromRequest(req);

    const orders = await orderService.getMyOrders(user.userId);

    res.status(200).json({
      success: true,
      data: orders,
    });
  }
);

export const getAllOrders = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const orders = await orderService.getAllOrders();

    res.status(200).json({
      success: true,
      data: orders,
    });
  }
);

export const getOrderById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const user = getUserFromRequest(req);
    const id = Number(req.params.id);

    const order = await orderService.getOrderById(id, user.userId, user.rol);

    res.status(200).json({
      success: true,
      data: order,
    });
  }
);

export const cancelOrder = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const user = getUserFromRequest(req);
    const id = Number(req.params.id);

    await orderService.cancelOrder(id, user.userId);

    res.status(200).json({
      success: true,
      message: "Pedido cancelado correctamente",
    });
  }
);

export const updateOrderStatus = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const { estado } = req.body as { estado: EstadoPedido };

    const updatedOrder = await orderService.updateOrderStatus(id, estado);

    res.status(200).json({
      success: true,
      message: "Estado del pedido actualizado correctamente",
      data: updatedOrder,
    });
  }
);
