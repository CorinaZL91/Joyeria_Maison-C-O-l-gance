import { Router } from "express";
import {
  getCart,
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
  clearCart,
} from "../controller/cart.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  addToCartSchema,
  cartItemParamsSchema,
  updateCartItemQuantityBodySchema,
  removeCartItemQuerySchema,
} from "../validators/cart.schemas.js";

const router = Router();

router.use(authenticate);

router.get("/", getCart);

router.post("/items", validate({ body: addToCartSchema }), addToCart);

router.put(
  "/items/:producto_id",
  validate({
    params: cartItemParamsSchema,
    body: updateCartItemQuantityBodySchema,
  }),
  updateCartItemQuantity
);

router.delete(
  "/items/:producto_id",
  validate({
    params: cartItemParamsSchema,
    query: removeCartItemQuerySchema,
  }),
  removeCartItem
);

router.delete("/", clearCart);

export default router;
