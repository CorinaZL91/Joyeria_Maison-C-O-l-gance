import { Router } from "express";
import {
  getActiveStockAlerts,
  getAllStockAlerts,
} from "../controller/alert.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { authorizeRole } from "../middlewares/role.middleware.js";
import { RolUsuario } from "../../generated/prisma/client.js";

const router = Router();

router.use(authenticate);
router.use(authorizeRole(RolUsuario.administrador));

router.get("/", getActiveStockAlerts);
router.get("/history", getAllStockAlerts);

export default router;
