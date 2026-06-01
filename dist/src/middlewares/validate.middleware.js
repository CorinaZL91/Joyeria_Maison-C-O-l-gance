import { ZodError } from "zod";
export const validate = (schemas) => {
    return (req, res, next) => {
        try {
            if (schemas.body) {
                req.body = schemas.body.parse(req.body ?? {});
            }
            if (schemas.params) {
                req.params = schemas.params.parse(req.params ?? {});
            }
            if (schemas.query) {
                req.query = schemas.query.parse(req.query ?? {});
            }
            next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    success: false,
                    message: "Error de validación",
                    errors: error.flatten(),
                });
                return;
            }
            res.status(500).json({
                success: false,
                message: "Error interno del servidor",
            });
        }
    };
};
//# sourceMappingURL=validate.middleware.js.map