import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Categorias
 *
 */
export type Categorias = Prisma.CategoriasModel;
/**
 * Model Productos
 *
 */
export type Productos = Prisma.ProductosModel;
/**
 * Model Alerta_stock
 *
 */
export type Alerta_stock = Prisma.Alerta_stockModel;
/**
 * Model Pedidos
 *
 */
export type Pedidos = Prisma.PedidosModel;
/**
 * Model Detalle_Pedidos
 *
 */
export type Detalle_Pedidos = Prisma.Detalle_PedidosModel;
/**
 * Model Carrito
 *
 */
export type Carrito = Prisma.CarritoModel;
/**
 * Model Usuario
 *
 */
export type Usuario = Prisma.UsuarioModel;
//# sourceMappingURL=client.d.ts.map