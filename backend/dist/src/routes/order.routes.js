import { Router } from "express";
import { z } from "zod";
import { cancelOrder, createOrder, getAllOrders, getMyOrders, getOrderById, updateOrderStatus, } from "../controller/order.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createOrderSchema, updateOrderStatusSchema, } from "../validators/order.schemas.js";
import { RolUsuario } from "../../generated/prisma/client.js";
const router = Router();
const orderIdParamsSchema = z.object({
    id: z.coerce.number().int("El ID debe ser entero").positive("ID inválido"),
});
router.use(authenticate);
router.post("/", validate({ body: createOrderSchema }), createOrder);
router.get("/my-orders", getMyOrders);
router.get("/", authorizeRole(RolUsuario.administrador), getAllOrders);
router.get("/:id", validate({ params: orderIdParamsSchema }), getOrderById);
router.patch("/:id/cancel", validate({ params: orderIdParamsSchema }), cancelOrder);
router.patch("/:id/status", authorizeRole(RolUsuario.administrador), validate({
    params: orderIdParamsSchema,
    body: updateOrderStatusSchema,
}), updateOrderStatus);
export default router;
//# sourceMappingURL=order.routes.js.map