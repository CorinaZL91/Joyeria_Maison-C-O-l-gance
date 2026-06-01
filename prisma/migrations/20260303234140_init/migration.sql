-- CreateEnum
CREATE TYPE "estado_alerta" AS ENUM ('Activa', 'Atendida');

-- CreateEnum
CREATE TYPE "estado_envio" AS ENUM ('Procesando', 'Enviado', 'Entregado', 'Cancelado');

-- CreateEnum
CREATE TYPE "rol" AS ENUM ('cliente', 'admin');

-- CreateEnum
CREATE TYPE "materiales" AS ENUM ('oro', 'plata', 'acero_inoxidable');

-- CreateTable
CREATE TABLE "Categorias" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "Productos" (
    "id_producto" SERIAL NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" TEXT,
    "precio" DECIMAL(10,2) NOT NULL,
    "material" "materiales" NOT NULL,
    "stock" INTEGER NOT NULL,
    "imagen_url" VARCHAR(255),

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "Alerta_stock" (
    "id_alerta" SERIAL NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "nivel_minimo" INTEGER NOT NULL,
    "estado" "estado_alerta" NOT NULL,

    CONSTRAINT "Alerta_stock_pkey" PRIMARY KEY ("id_alerta")
);

-- CreateTable
CREATE TABLE "Pedidos" (
    "id_pedido" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "fecha_pedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DECIMAL(65,30) NOT NULL,
    "estado_envio" "estado_envio" NOT NULL,
    "metodo_pago" TEXT NOT NULL,
    "direccion_entrega" TEXT NOT NULL,

    CONSTRAINT "Pedidos_pkey" PRIMARY KEY ("id_pedido")
);

-- CreateTable
CREATE TABLE "Detalle_Pedidos" (
    "id_detalle" SERIAL NOT NULL,
    "id_pedido" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_unitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Detalle_Pedidos_pkey" PRIMARY KEY ("id_detalle")
);

-- CreateTable
CREATE TABLE "Carrito" (
    "id_carrito" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "fecha_agregado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Carrito_pkey" PRIMARY KEY ("id_carrito")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "contraseña_hash" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(15),
    "rol" "rol" NOT NULL DEFAULT 'cliente',
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrito_id_usuario_id_producto_key" ON "Carrito"("id_usuario", "id_producto");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Productos" ADD CONSTRAINT "Productos_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Categorias"("id_categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alerta_stock" ADD CONSTRAINT "Alerta_stock_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Pedidos" ADD CONSTRAINT "Detalle_Pedidos_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedidos"("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Detalle_Pedidos" ADD CONSTRAINT "Detalle_Pedidos_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrito" ADD CONSTRAINT "Carrito_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "Productos"("id_producto") ON DELETE RESTRICT ON UPDATE CASCADE;
