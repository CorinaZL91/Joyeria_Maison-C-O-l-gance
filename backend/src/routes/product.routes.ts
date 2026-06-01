import { Router } from "express";
import { z } from "zod";
import {
  createProduct,
  deleteProduct,
  getAdminProducts,
  getProductById,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";

import {
  createProductSchema,
  updateProductSchema,
  productQuerySchema,
} from "../validators/product.schemas.js";

import { RolUsuario } from "../../generated/prisma/client.js";

const router = Router();

const productIdParamsSchema = z.object({
  id: z.coerce.number().int("El ID debe ser entero").positive("ID inválido"),
});

// catálogo
router.get("/", getProducts);

router.get(
  "/admin/all",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  getAdminProducts
);

router.get("/:id", validate({ params: productIdParamsSchema }), getProductById);

router.post(
  "/",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  upload.single("imagen"),
  validate({ body: createProductSchema }),
  createProduct
);

router.put(
  "/:id",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  upload.single("imagen"),
  validate({
    params: productIdParamsSchema,
    body: updateProductSchema,
  }),
  updateProduct
);

router.delete(
  "/:id",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  validate({ params: productIdParamsSchema }),
  deleteProduct
);

export default router;
