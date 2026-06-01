/*
Warnings:

- Added the required column `fecha_update` to the `AlertaStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AlertaStock"
ADD COLUMN "activa" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN "fecha_update" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Producto"
ADD COLUMN "stock_minimo" INTEGER NOT NULL DEFAULT 5;