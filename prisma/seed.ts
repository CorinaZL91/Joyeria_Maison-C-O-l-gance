import {
  PrismaClient,
  RolUsuario,
  EstadoPedido,
  MetodoPago,
} from "../generated/prisma/client";
import fs from "fs-extra";
import path from "path";
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt from "bcryptjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Falta la variable de entorno DATABASE_URL");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

type UsuarioSeed = {
  id: number;
  nombre: string;
  correo: string;
  password_hash: string;
  telefono?: string | null;
  direccion?: string | null;
  rol: RolUsuario;
};

type CategoriaSeed = {
  id: number;
  nombre: string;
  descripcion?: string | null;
};

type ProductoSeed = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  stock_minimo?: number | null;
  imagen_url?: string | null;
  imagen_public_id?: string | null;
  activo?: boolean | null;
  categoria_id: number;
};

type PedidoSeed = {
  id: number;
  usuario_id: number;
  total: number;
  metodo_pago: MetodoPago;
  estado: EstadoPedido;
};

type DetallePedidoSeed = {
  id: number;
  pedido_id: number;
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
  subtotal?: number | null;
};

type CarritoSeed = {
  id: number;
  usuario_id: number;
  producto_id: number;
  cantidad: number;
};

type AlertaStockSeed = {
  id: number;
  producto_id: number;
  stock_minimo: number;
  activa: boolean;
};

function readJsonFile<T>(fileName: string): T[] {
  const filePath = path.join(__dirname, "seedData", fileName);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

async function clearDatabase() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE
      "AlertaStock",
      "Carrito",
      "DetallePedido",
      "Pedido",
      "Producto",
      "Categoria",
      "Usuario"
    RESTART IDENTITY CASCADE;
  `);

  console.log("Base de datos limpiada y secuencias reiniciadas correctamente");
}

async function seedUsuarios() {
  const usuarios = readJsonFile<UsuarioSeed>("usuarios.json");

  for (const usuario of usuarios) {
    const hashedPassword = await bcrypt.hash(usuario.password_hash, 10);

    await prisma.usuario.create({
      data: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        password_hash: hashedPassword,
        telefono: usuario.telefono ?? null,
        direccion: usuario.direccion ?? null,
        rol: usuario.rol,
      },
    });
  }

  console.log("Usuarios sembrados");
}

async function seedCategorias() {
  const categorias = readJsonFile<CategoriaSeed>("categorias.json");

  await prisma.categoria.createMany({
    data: categorias.map((categoria) => ({
      id: categoria.id,
      nombre: categoria.nombre,
      descripcion: categoria.descripcion ?? null,
    })),
  });

  console.log("Categorías sembradas");
}

async function seedProductos() {
  const productos = readJsonFile<ProductoSeed>("productos.json");

  for (const producto of productos) {
    const categoria = await prisma.categoria.findUnique({
      where: {
        id: producto.categoria_id,
      },
    });

    if (!categoria) {
      throw new Error(
        `No se encontró la categoría con id ${producto.categoria_id} para el producto "${producto.nombre}"`
      );
    }

    await prisma.producto.create({
      data: {
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        stock: producto.stock,
        stock_minimo: producto.stock_minimo ?? 5,
        imagen_url: producto.imagen_url ?? null,
        imagen_public_id: producto.imagen_public_id ?? null,
        activo: producto.activo ?? true,
        categoria_id: producto.categoria_id,
      },
    });
  }

  console.log("Productos sembrados");
}

async function seedPedidos() {
  const pedidos = readJsonFile<PedidoSeed>("pedidos.json");

  await prisma.pedido.createMany({
    data: pedidos.map((pedido) => ({
      id: pedido.id,
      usuario_id: pedido.usuario_id,
      total: pedido.total,
      metodo_pago: pedido.metodo_pago,
      estado: pedido.estado,
    })),
  });

  console.log("Pedidos sembrados");
}

async function seedDetallePedidos() {
  const detalles = readJsonFile<DetallePedidoSeed>("detalle_pedidos.json");

  for (const detalle of detalles) {
    await prisma.detallePedido.create({
      data: {
        id: detalle.id,
        pedido_id: detalle.pedido_id,
        producto_id: detalle.producto_id,
        cantidad: detalle.cantidad,
        precio_unitario: detalle.precio_unitario,
        subtotal:
          detalle.subtotal ?? detalle.cantidad * detalle.precio_unitario,
      },
    });
  }

  console.log("Detalle de pedidos sembrado");
}

async function seedCarritos() {
  const carritos = readJsonFile<CarritoSeed>("carritos.json");

  await prisma.carrito.createMany({
    data: carritos.map((carrito) => ({
      id: carrito.id,
      usuario_id: carrito.usuario_id,
      producto_id: carrito.producto_id,
      cantidad: carrito.cantidad,
    })),
  });

  console.log("Carritos sembrados");
}

async function seedAlertasStock() {
  const alertas = readJsonFile<AlertaStockSeed>("alertas_stock.json");

  for (const alerta of alertas) {
    await prisma.alertaStock.create({
      data: {
        id: alerta.id,
        producto_id: alerta.producto_id,
        stock_minimo: alerta.stock_minimo,
        mensaje: alerta.activa ? "Producto con stock bajo" : "Alerta atendida",
        activa: alerta.activa,
      },
    });
  }

  console.log("Alertas de stock sembradas");
}

async function main() {
  console.log("Iniciando seed...");

  await clearDatabase();

  await seedUsuarios();
  await seedCategorias();
  await seedProductos();
  await seedPedidos();
  await seedDetallePedidos();
  await seedCarritos();
  await seedAlertasStock();

  console.log("Seed completado correctamente");
}

main()
  .catch((error) => {
    console.error("Error al ejecutar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
