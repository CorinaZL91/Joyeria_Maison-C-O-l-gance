import { prisma } from "../config/prisma.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const getActiveStockAlerts = asyncHandler(async (_req, res) => {
    const alerts = await prisma.alertaStock.findMany({
        where: {
            activa: true,
        },
        include: {
            producto: {
                include: {
                    categoria: true,
                },
            },
        },
        orderBy: {
            fecha_alerta: "desc",
        },
    });
    res.status(200).json({
        success: true,
        data: alerts,
    });
});
export const getAllStockAlerts = asyncHandler(async (_req, res) => {
    const alerts = await prisma.alertaStock.findMany({
        include: {
            producto: {
                include: {
                    categoria: true,
                },
            },
        },
        orderBy: {
            fecha_alerta: "desc",
        },
    });
    res.status(200).json({
        success: true,
        data: alerts,
    });
});
//# sourceMappingURL=alert.controller.js.map