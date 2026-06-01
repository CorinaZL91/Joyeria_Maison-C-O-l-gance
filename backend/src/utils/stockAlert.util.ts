import { prisma } from "../config/prisma.js";

export const syncStockAlert = async (productoId: number): Promise<void> => {
  const product = await prisma.producto.findUnique({
    where: { id: productoId },
    include: {
      tallas: true,
    },
  });

  if (!product) {
    return;
  }

  if (!product.usar_tallas) {
    const stockActual = product.stock ?? 0;
    const shouldAlert = stockActual <= product.stock_minimo;

    const existingAlert = await prisma.alertaStock.findFirst({
      where: {
        producto_id: productoId,
        producto_talla_id: null,
      },
    });

    if (shouldAlert) {
      const mensaje = `El producto "${product.nombre}" tiene stock bajo (${stockActual} unidades disponibles).`;

      if (existingAlert) {
        await prisma.alertaStock.update({
          where: { id: existingAlert.id },
          data: {
            stock_minimo: product.stock_minimo,
            talla: null,
            mensaje,
            activa: true,
          },
        });
      } else {
        await prisma.alertaStock.create({
          data: {
            producto_id: productoId,
            producto_talla_id: null,
            talla: null,
            stock_minimo: product.stock_minimo,
            mensaje,
            activa: true,
          },
        });
      }
    } else if (existingAlert && existingAlert.activa) {
      await prisma.alertaStock.update({
        where: { id: existingAlert.id },
        data: {
          activa: false,
        },
      });
    }

    return;
  }

  const activeSizes = product.tallas.filter((talla) => talla.activo);

  for (const talla of activeSizes) {
    const shouldAlert = talla.stock <= product.stock_minimo;

    const existingAlert = await prisma.alertaStock.findFirst({
      where: {
        producto_id: productoId,
        producto_talla_id: talla.id,
      },
    });

    if (shouldAlert) {
      const mensaje = `El producto "${product.nombre}" en talla "${talla.talla}" tiene stock bajo (${talla.stock} unidades disponibles).`;

      if (existingAlert) {
        await prisma.alertaStock.update({
          where: { id: existingAlert.id },
          data: {
            stock_minimo: product.stock_minimo,
            talla: talla.talla,
            mensaje,
            activa: true,
          },
        });
      } else {
        await prisma.alertaStock.create({
          data: {
            producto_id: productoId,
            producto_talla_id: talla.id,
            talla: talla.talla,
            stock_minimo: product.stock_minimo,
            mensaje,
            activa: true,
          },
        });
      }
    } else if (existingAlert && existingAlert.activa) {
      await prisma.alertaStock.update({
        where: { id: existingAlert.id },
        data: {
          activa: false,
        },
      });
    }
  }

  await prisma.alertaStock.updateMany({
    where: {
      producto_id: productoId,
      producto_talla_id: {
        not: null,
      },
      productoTalla: {
        activo: false,
      },
      activa: true,
    },
    data: {
      activa: false,
    },
  });
};
