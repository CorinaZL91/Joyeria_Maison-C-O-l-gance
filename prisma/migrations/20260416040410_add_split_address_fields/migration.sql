-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "direccion_calle" TEXT,
ADD COLUMN     "direccion_ciudad" TEXT,
ADD COLUMN     "direccion_codigo_postal" TEXT;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "direccion_calle" TEXT,
ADD COLUMN     "direccion_ciudad" TEXT,
ADD COLUMN     "direccion_codigo_postal" TEXT;
