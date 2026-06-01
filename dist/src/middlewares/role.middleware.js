import { RolUsuario } from "../../generated/prisma/client.js";
export const authorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ message: "No autenticado" });
            return;
        }
        if (!roles.includes(req.user.rol)) {
            res.status(403).json({ message: "No autorizado" });
            return;
        }
        next();
    };
};
//# sourceMappingURL=role.middleware.js.map