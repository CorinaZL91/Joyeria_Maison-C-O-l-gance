import { Router } from "express";
import { login, me, register, logout } from "../controller/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, registerSchema } from "../validators/auth.schemas.js";
const router = Router();
router.post("/register", validate({ body: registerSchema }), register);
router.post("/login", validate({ body: loginSchema }), login);
router.post("/logout", logout);
router.get("/me", authenticate, me);
export default router;
//# sourceMappingURL=auth.routes.js.map