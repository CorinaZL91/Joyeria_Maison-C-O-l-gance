/*
  Warnings:

  - You are about to drop the column `talla` on the `Carrito` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuario_id,producto_id,producto_talla_id]` on the table `Carrito` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AlertaStock" DROP CONSTRAINT "AlertaStock_producto_id_fkey";

-- DropForeignKey
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_producto_id_fkey";

-- DropForeignKey
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_pedido_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductoTalla" DROP CONSTRAINT "ProductoTalla_producto_id_fkey";

-- DropIndex
DROP INDEX "Carrito_producto_id_talla_idx";

-- DropIndex
DROP INDEX "Carrito_usuario_id_producto_id_talla_key";

-- AlterTable
ALTER TABLE "AlertaStock" ADD COLUMN     "producto_talla_id" INTEGER;

-- AlterTable
ALTER TABLE "Carrito" DROP COLUMN "talla",
ADD COLUMN     "producto_talla_id" INTEGER;

-- AlterTable
ALTER TABLE "DetallePedido" ADD COLUMN     "producto_talla_id" INTEGER;

-- AlterTable
ALTER TABLE "ProductoTalla" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "fecha_creada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "AlertaStock_producto_id_idx" ON "AlertaStock"("producto_id");

-- CreateIndex
CREATE INDEX "AlertaStock_producto_talla_id_idx" ON "AlertaStock"("producto_talla_id");

-- CreateIndex
CREATE INDEX "AlertaStock_activa_idx" ON "AlertaStock"("activa");

-- CreateIndex
CREATE INDEX "Carrito_usuario_id_idx" ON "Carrito"("usuario_id");

-- CreateIndex
CREATE INDEX "Carrito_producto_id_idx" ON "Carrito"("producto_id");

-- CreateIndex
CREATE INDEX "Carrito_producto_talla_id_idx" ON "Carrito"("producto_talla_id");

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_usuario_id_producto_id_producto_talla_id_key" ON "Carrito"("usuario_id", "producto_id", "producto_talla_id");

-- CreateIndex
CREATE INDEX "DetallePedido_pedido_id_idx" ON "DetallePedido"("pedido_id");

-- CreateIndex
CREATE INDEX "DetallePedido_producto_id_idx" ON "DetallePedido"("producto_id");

-- CreateIndex
CREATE INDEX "DetallePedido_producto_talla_id_idx" ON "DetallePedido"("producto_talla_id");

-- CreateIndex
CREATE INDEX "Pedido_usuario_id_idx" ON "Pedido"("usuario_id");

-- CreateIndex
CREATE INDEX "Pedido_estado_idx" ON "Pedido"("estado");

-- CreateIndex
CREATE INDEX "Pedido_fecha_pedido_idx" ON "Pedido"("fecha_pedido");

-- CreateIndex
CREATE INDEX "Producto_categoria_id_idx" ON "Producto"("categoria_id");

-- CreateIndex
CREATE INDEX "Producto_activo_idx" ON "Producto"("activo");

-- CreateIndex
CREATE INDEX "Producto_usar_tallas_idx" ON "Producto"("usar_tallas");

-- CreateIndex
CREATE INDEX "ProductoTalla_activo_idx" ON "ProductoTalla"("activo");

-- AddForeignKey
ALTER TABLE "ProductoTalla" ADD CONSTRAINT "ProductoTalla_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_producto_talla_id_fkey" FOREIGN KEY ("producto_talla_id") REFERENCES "ProductoTalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_producto_talla_id_fkey" FOREIGN KEY ("producto_talla_id") REFERENCES "ProductoTalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlertaStock" ADD CONSTRAINT "AlertaStock_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlertaStock" ADD CONSTRAINT "AlertaStock_producto_talla_id_fkey" FOREIGN KEY ("producto_talla_id") REFERENCES "ProductoTalla"("id") ON DELETE SET NULL ON UPDATE CASCADE;
