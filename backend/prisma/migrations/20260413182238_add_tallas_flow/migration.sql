/*
  Warnings:

  - A unique constraint covering the columns `[usuario_id,producto_id,talla]` on the table `Carrito` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Carrito_usuario_id_producto_id_key";

-- AlterTable
ALTER TABLE "AlertaStock" ADD COLUMN     "talla" TEXT;

-- AlterTable
ALTER TABLE "Carrito" ADD COLUMN     "talla" TEXT;

-- AlterTable
ALTER TABLE "DetallePedido" ADD COLUMN     "talla" TEXT;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "usar_tallas" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "stock" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ProductoTalla" (
    "id" SERIAL NOT NULL,
    "talla" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "producto_id" INTEGER NOT NULL,

    CONSTRAINT "ProductoTalla_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductoTalla_producto_id_idx" ON "ProductoTalla"("producto_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductoTalla_producto_id_talla_key" ON "ProductoTalla"("producto_id", "talla");

-- CreateIndex
CREATE INDEX "Carrito_producto_id_talla_idx" ON "Carrito"("producto_id", "talla");

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_usuario_id_producto_id_talla_key" ON "Carrito"("usuario_id", "producto_id", "talla");

-- AddForeignKey
ALTER TABLE "ProductoTalla" ADD CONSTRAINT "ProductoTalla_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
