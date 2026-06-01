import { EstadoPedido, RolUsuario } from "../../generated/prisma/client.js";
import type { CreateOrderInput } from "../validators/order.schemas.js";
export declare const orderService: {
    createOrder: (userId: number, body: CreateOrderInput) => Promise<any>;
    getMyOrders: (userId: number) => Promise<any[]>;
    getAllOrders: () => Promise<any[]>;
    getOrderById: (id: number, userId: number, rol: RolUsuario) => Promise<any>;
    cancelOrder: (id: number, userId: number) => Promise<void>;
    updateOrderStatus: (id: number, estado: EstadoPedido) => Promise<any>;
};
//# sourceMappingURL=order.service.d.ts.map