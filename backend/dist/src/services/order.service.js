import { EstadoPedido, MetodoPago, RolUsuario, } from "../../generated/prisma/client.js";
import { AppError } from "../utils/appError.js";
import { syncStockAlert } from "../utils/stockAlert.util.js";
import { orderRepository } from "../repositories/order.repository.js";
const roundToTwo = (value) => {
    return Number(value.toFixed(2));
};
const formatOrderDetail = (detail) => ({
    ...detail,
    producto_talla: detail.productoTalla ?? null,
});
const formatOrder = (order) => ({
    ...order,
    detalles: order.detalles?.map(formatOrderDetail) ?? [],
});
const handleOrderTransactionError = (error) => {
    if (error instanceof Error) {
        const [code, productName, tallaName] = error.message.split(":");
        if (code === "PRODUCT_NOT_FOUND") {
            throw new AppError(`El producto con ID ${productName} ya no existe durante el procesamiento del pedido`, 400);
        }
        if (code === "PRODUCT_INACTIVE") {
            throw new AppError(`El producto "${productName}" ya no está disponible`, 400);
        }
        if (code === "SIZE_REQUIRED") {
            throw new AppError(`Debes seleccionar una talla válida para "${productName}"`, 400);
        }
        if (code === "SIZE_UNAVAILABLE") {
            throw new AppError(`La talla seleccionada para "${productName}" ya no está disponible`, 400);
        }
        if (code === "SIZE_PRODUCT_MISMATCH") {
            throw new AppError(`La talla seleccionada no pertenece al producto "${productName}"`, 400);
        }
        if (code === "SIZE_STOCK_INSUFFICIENT") {
            throw new AppError(`Stock insuficiente para "${productName}" en talla "${tallaName}" durante el procesamiento del pedido`, 400);
        }
        if (code === "STOCK_INSUFFICIENT") {
            throw new AppError(`Stock insuficiente para "${productName}" durante el procesamiento del pedido`, 400);
        }
    }
    throw error;
};
export const orderService = {
    createOrder: async (userId, body) => {
        let direccionPedido = {
            direccion_calle: null,
            direccion_ciudad: null,
            direccion_codigo_postal: null,
        };
        if (body.metodo_pago === MetodoPago.tarjeta) {
            const usuario = await orderRepository.findUserAddressById(userId);
            if (!usuario) {
                throw new AppError("Usuario no encontrado", 404);
            }
            const calleFinal = body.direccion_calle ?? usuario.direccion_calle ?? null;
            const ciudadFinal = body.direccion_ciudad ?? usuario.direccion_ciudad ?? null;
            const codigoPostalFinal = body.direccion_codigo_postal ?? usuario.direccion_codigo_postal ?? null;
            if (!calleFinal || !ciudadFinal || !codigoPostalFinal) {
                throw new AppError("Debes proporcionar calle, ciudad y código postal para pagos con tarjeta", 400);
            }
            direccionPedido = {
                direccion_calle: calleFinal,
                direccion_ciudad: ciudadFinal,
                direccion_codigo_postal: codigoPostalFinal,
            };
            const envioDireccionNueva = body.direccion_calle !== undefined ||
                body.direccion_ciudad !== undefined ||
                body.direccion_codigo_postal !== undefined;
            if (envioDireccionNueva) {
                await orderRepository.updateUserAddress(userId, {
                    direccion_calle: calleFinal,
                    direccion_ciudad: ciudadFinal,
                    direccion_codigo_postal: codigoPostalFinal,
                });
            }
        }
        const cartItems = await orderRepository.findCartItemsForOrder(userId);
        if (cartItems.length === 0) {
            throw new AppError("El carrito está vacío", 400);
        }
        for (const item of cartItems) {
            const producto = item.producto;
            if (!producto) {
                throw new AppError("Uno de los productos del carrito ya no existe", 400);
            }
            if (!producto.activo) {
                throw new AppError(`El producto "${producto.nombre}" no está disponible`, 400);
            }
            if (producto.usar_tallas) {
                if (!item.producto_talla_id || !item.productoTalla) {
                    throw new AppError(`Debes seleccionar una talla válida para "${producto.nombre}"`, 400);
                }
                if (!item.productoTalla.activo) {
                    throw new AppError(`La talla "${item.productoTalla.talla}" de "${producto.nombre}" ya no está disponible`, 400);
                }
                if (item.productoTalla.producto_id !== producto.id) {
                    throw new AppError(`La talla seleccionada no pertenece al producto "${producto.nombre}"`, 400);
                }
                if (item.cantidad > item.productoTalla.stock) {
                    throw new AppError(`Stock insuficiente para "${producto.nombre}" en talla "${item.productoTalla.talla}"`, 400);
                }
            }
            else {
                if (item.producto_talla_id !== null) {
                    throw new AppError(`El producto "${producto.nombre}" no debería tener talla asociada en el carrito`, 400);
                }
                if (producto.stock === null || item.cantidad > producto.stock) {
                    throw new AppError(`Stock insuficiente para "${producto.nombre}"`, 400);
                }
            }
        }
        const subtotal = roundToTwo(cartItems.reduce((acc, item) => {
            return acc + Number(item.producto.precio) * item.cantidad;
        }, 0));
        const iva = roundToTwo(subtotal * 0.16);
        const total = roundToTwo(subtotal + iva);
        const newOrder = await orderRepository
            .createOrderFromCart(userId, {
            total,
            metodo_pago: body.metodo_pago,
            direccion_calle: direccionPedido.direccion_calle,
            direccion_ciudad: direccionPedido.direccion_ciudad,
            direccion_codigo_postal: direccionPedido.direccion_codigo_postal,
        }, cartItems)
            .catch((error) => handleOrderTransactionError(error));
        for (const item of cartItems) {
            await syncStockAlert(item.producto_id);
        }
        const createdOrderWithRelations = await orderRepository.findOrderWithRelations(newOrder.id);
        return createdOrderWithRelations
            ? formatOrder(createdOrderWithRelations)
            : null;
    },
    getMyOrders: async (userId) => {
        const orders = await orderRepository.findOrdersByUserId(userId);
        return orders.map(formatOrder);
    },
    getAllOrders: async () => {
        const orders = await orderRepository.findAllOrders();
        return orders.map(formatOrder);
    },
    getOrderById: async (id, userId, rol) => {
        const order = await orderRepository.findOrderById(id);
        if (!order) {
            throw new AppError("Pedido no encontrado", 404);
        }
        const isOwner = order.usuario_id === userId;
        const isAdmin = rol === RolUsuario.administrador;
        if (!isOwner && !isAdmin) {
            throw new AppError("No autorizado para ver este pedido", 403);
        }
        return formatOrder(order);
    },
    cancelOrder: async (id, userId) => {
        const order = await orderRepository.findOrderByIdWithDetails(id);
        if (!order) {
            throw new AppError("Pedido no encontrado", 404);
        }
        if (order.usuario_id !== userId) {
            throw new AppError("No autorizado para cancelar este pedido", 403);
        }
        if (order.estado !== EstadoPedido.pendiente) {
            throw new AppError("Solo se pueden cancelar pedidos en estado pendiente", 400);
        }
        await orderRepository.cancelOrderAndRestoreStock(id, order.detalles);
        for (const detalle of order.detalles) {
            await syncStockAlert(detalle.producto_id);
        }
    },
    updateOrderStatus: async (id, estado) => {
        const order = await orderRepository.findOrderByIdWithDetails(id);
        if (!order) {
            throw new AppError("Pedido no encontrado", 404);
        }
        if (order.estado === EstadoPedido.cancelado) {
            throw new AppError("No se puede cambiar el estado de un pedido cancelado", 400);
        }
        if (order.estado === EstadoPedido.entregado) {
            throw new AppError("No se puede cambiar el estado de un pedido entregado", 400);
        }
        if (estado === EstadoPedido.cancelado &&
            order.estado !== EstadoPedido.pendiente) {
            throw new AppError("Solo se puede cancelar desde estado pendiente", 400);
        }
        await orderRepository.updateOrderStatus(id, estado, order.detalles);
        if (estado === EstadoPedido.cancelado) {
            for (const detalle of order.detalles) {
                await syncStockAlert(detalle.producto_id);
            }
        }
        const updatedOrder = await orderRepository.findOrderWithRelations(id);
        return updatedOrder ? formatOrder(updatedOrder) : null;
    },
};
//# sourceMappingURL=order.service.js.map