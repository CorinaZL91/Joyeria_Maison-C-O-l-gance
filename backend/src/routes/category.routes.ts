import { Router } from "express";
import { z } from "zod";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controller/category.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createCategorySchema,
  updateCategorySchema,
} from "../validators/category.schemas.js";
import { RolUsuario } from "../../generated/prisma/client.js";

const router = Router();

const categoryIdParamsSchema = z.object({
  id: z.coerce.number().int("El ID debe ser entero").positive("ID inválido"),
});

router.get("/", getCategories);

router.get(
  "/:id",
  validate({ params: categoryIdParamsSchema }),
  getCategoryById
);

router.post(
  "/",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  validate({ body: createCategorySchema }),
  createCategory
);

router.put(
  "/:id",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  validate({
    params: categoryIdParamsSchema,
    body: updateCategorySchema,
  }),
  updateCategory
);

router.delete(
  "/:id",
  authenticate,
  authorizeRole(RolUsuario.administrador),
  validate({ params: categoryIdParamsSchema }),
  deleteCategory
);

export default router;
