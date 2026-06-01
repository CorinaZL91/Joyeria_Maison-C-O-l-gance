/*
  Warnings:

  - The primary key for the `Carrito` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_carrito` on the `Carrito` table. All the data in the column will be lost.
  - You are about to drop the column `id_producto` on the `Carrito` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Carrito` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `contraseña_hash` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `id_usuario` on the `Usuario` table. All the data in the column will be lost.
  - The `rol` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Alerta_stock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Detalle_Pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Productos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[usuario_id,producto_id]` on the table `Carrito` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `producto_id` to the `Carrito` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `Carrito` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('administrador', 'cliente');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('pendiente', 'en_preparacion', 'enviado', 'entregado', 'cancelado');

-- CreateEnum
CREATE TYPE "MetodoPago" AS ENUM ('tarjeta', 'tienda');

-- DropForeignKey
ALTER TABLE "Alerta_stock" DROP CONSTRAINT "Alerta_stock_id_producto_fkey";

-- DropForeignKey
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_id_producto_fkey";

-- DropForeignKey
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_Pedidos" DROP CONSTRAINT "Detalle_Pedidos_id_pedido_fkey";

-- DropForeignKey
ALTER TABLE "Detalle_Pedidos" DROP CONSTRAINT "Detalle_Pedidos_id_producto_fkey";

-- DropForeignKey
ALTER TABLE "Pedidos" DROP CONSTRAINT "Pedidos_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Productos" DROP CONSTRAINT "Productos_id_categoria_fkey";

-- DropIndex
DROP INDEX "Carrito_id_usuario_id_producto_key";

-- AlterTable
ALTER TABLE "Carrito" DROP CONSTRAINT "Carrito_pkey",
DROP COLUMN "id_carrito",
DROP COLUMN "id_producto",
DROP COLUMN "id_usuario",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "producto_id" INTEGER NOT NULL,
ADD COLUMN     "usuario_id" INTEGER NOT NULL,
ALTER COLUMN "cantidad" SET DEFAULT 1,
ADD CONSTRAINT "Carrito_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_pkey",
DROP COLUMN "contraseña_hash",
DROP COLUMN "id_usuario",
ADD COLUMN     "direccion" TEXT,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "password_hash" TEXT NOT NULL,
ALTER COLUMN "nombre" SET DATA TYPE TEXT,
ALTER COLUMN "correo" SET DATA TYPE TEXT,
ALTER COLUMN "telefono" SET DATA TYPE TEXT,
DROP COLUMN "rol",
ADD COLUMN     "rol" "RolUsuario" NOT NULL DEFAULT 'cliente',
ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Alerta_stock";

-- DropTable
DROP TABLE "Categorias";

-- DropTable
DROP TABLE "Detalle_Pedidos";

-- DropTable
DROP TABLE "Pedidos";

-- DropTable
DROP TABLE "Productos";

-- DropEnum
DROP TYPE "estado_alerta";

-- DropEnum
DROP TYPE "estado_envio";

-- DropEnum
DROP TYPE "materiales";

-- DropEnum
DROP TYPE "rol";

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL,
    "imagen_url" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "fecha_pedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(10,2) NOT NULL,
    "metodo_pago" "MetodoPago" NOT NULL,
    "estado" "EstadoPedido" NOT NULL DEFAULT 'pendiente',

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "id" SERIAL NOT NULL,
    "pedido_id" INTEGER NOT NULL,
    "producto_id" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlertaStock" (
    "id" SERIAL NOT NULL,
    "producto_id" INTEGER NOT NULL,
    "stock_minimo" INTEGER NOT NULL,
    "mensaje" TEXT,
    "fecha_alerta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AlertaStock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_nombre_key" ON "Categoria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_usuario_id_producto_id_key" ON "Carrito"("usuario_id", "producto_id");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlertaStock" ADD CONSTRAINT "AlertaStock_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
