"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ClipboardList,
  FolderTree,
  Gem,
  Package,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useGetActiveAlertsQuery } from "@/app/state/services/alertApi";
import { useGetCategoriesQuery } from "@/app/state/services/categoryApi";
import { useGetAllOrdersQuery } from "@/app/state/services/orderApi";
import { useGetProductsQuery } from "@/app/state/services/productApi";

function formatCurrency(value: string | number) {
  return Number(value).toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return date;
  }
}

export default function AdminDashboardPage() {
  const { data: products = [], isLoading: productsLoading } =
    useGetProductsQuery(undefined);

  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  const { data: orders = [], isLoading: ordersLoading } =
    useGetAllOrdersQuery();

  const { data: alerts = [], isLoading: alertsLoading } =
    useGetActiveAlertsQuery();

  const totalProducts = products.length;
  const activeProducts = products.filter((product) => product.activo).length;
  const lowStockProducts = products.filter(
    (product) => Number(product.stock) <= Number(product.stock_minimo)
  ).length;

  const totalCategories = categories.length;
  const activeCategories = categories.filter(
    (category) => category.activa !== false
  ).length;

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.estado === "pendiente"
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.estado === "entregado"
  ).length;

  const totalAlerts = alerts.length;

  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.fecha_pedido).getTime() - new Date(a.fecha_pedido).getTime()
    )
    .slice(0, 5);

  const recentAlerts = [...alerts]
    .sort(
      (a, b) =>
        new Date(b.fecha_alerta).getTime() - new Date(a.fecha_alerta).getTime()
    )
    .slice(0, 5);

  const totalSales = orders
    .filter((order) => order.estado !== "cancelado")
    .reduce((acc, order) => acc + Number(order.total), 0);

  const isLoading =
    productsLoading || categoriesLoading || ordersLoading || alertsLoading;

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[34px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#be7a8f] dark:border-border dark:bg-background/70 dark:text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Panel administrativo
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-[#9a6274] dark:text-foreground md:text-4xl">
                Bienvenido Admin
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9b7883] dark:text-foreground/70">
                Supervisa el estado general de Maison C&amp;O Élégance,
                administra el catálogo, revisa pedidos y mantén controlado el
                inventario desde un solo lugar.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/admin/products"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Gestionar productos
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/admin/orders"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-5 py-3 text-sm font-medium text-[#9a6274] transition hover:bg-white dark:bg-background dark:text-foreground"
                >
                  Ver pedidos
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-sm dark:border-border dark:bg-background/70">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b68493] dark:text-primary">
                  Ventas acumuladas
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#8d596c] dark:text-foreground">
                  ${formatCurrency(totalSales)}
                </p>
                <p className="mt-2 text-sm text-[#a27c88] dark:text-foreground/60">
                  Pedidos no cancelados
                </p>
              </div>

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-sm dark:border-border dark:bg-background/70">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b68493] dark:text-primary">
                  Alertas activas
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#8d596c] dark:text-foreground">
                  {totalAlerts}
                </p>
                <p className="mt-2 text-sm text-[#a27c88] dark:text-foreground/60">
                  Inventario bajo
                </p>
              </div>

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-sm dark:border-border dark:bg-background/70">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b68493] dark:text-primary">
                  Pedidos pendientes
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#8d596c] dark:text-foreground">
                  {pendingOrders}
                </p>
                <p className="mt-2 text-sm text-[#a27c88] dark:text-foreground/60">
                  Requieren atención
                </p>
              </div>

              <div className="rounded-[28px] border border-white/70 bg-white/80 p-5 shadow-sm dark:border-border dark:bg-background/70">
                <p className="text-xs uppercase tracking-[0.25em] text-[#b68493] dark:text-primary">
                  Productos activos
                </p>
                <p className="mt-3 text-2xl font-semibold text-[#8d596c] dark:text-foreground">
                  {activeProducts}
                </p>
                <p className="mt-2 text-sm text-[#a27c88] dark:text-foreground/60">
                  Disponibles en catálogo
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7e7ec] text-[#b77b8c] dark:bg-secondary dark:text-primary">
                <Gem className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                Productos
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-foreground">
              {totalProducts}
            </p>
            <p className="mt-2 text-sm text-foreground/60">
              {activeProducts} activos · {lowStockProducts} con stock bajo
            </p>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3fb] text-[#6c8cc7] dark:bg-secondary dark:text-primary">
                <FolderTree className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                Categorías
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-foreground">
              {totalCategories}
            </p>
            <p className="mt-2 text-sm text-foreground/60">
              {activeCategories} visibles en navegación
            </p>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f1] text-[#4a9b68] dark:bg-secondary dark:text-primary">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                Pedidos
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-foreground">
              {totalOrders}
            </p>
            <p className="mt-2 text-sm text-foreground/60">
              {deliveredOrders} entregados
            </p>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#d49345] dark:bg-secondary dark:text-primary">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                Alertas
              </span>
            </div>
            <p className="mt-5 text-3xl font-semibold text-foreground">
              {totalAlerts}
            </p>
            <p className="mt-2 text-sm text-foreground/60">
              Requieren seguimiento
            </p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Accesos rápidos
                </h2>
                <p className="mt-1 text-sm text-foreground/60">
                  Navega rápidamente por los módulos principales
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/admin/products"
                className="group rounded-[24px] border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7e7ec] text-[#b77b8c] dark:bg-secondary dark:text-primary">
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">Productos</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Crea, edita y controla el catálogo.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ir al módulo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/admin/categories"
                className="group rounded-[24px] border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef3fb] text-[#6c8cc7] dark:bg-secondary dark:text-primary">
                  <FolderTree className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">Categorías</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Organiza la estructura visible del catálogo.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ir al módulo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/admin/orders"
                className="group rounded-[24px] border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef8f1] text-[#4a9b68] dark:bg-secondary dark:text-primary">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">Pedidos</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Consulta y actualiza el estado de las compras.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ir al módulo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/admin/alerts"
                className="group rounded-[24px] border border-border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4ea] text-[#d49345] dark:bg-secondary dark:text-primary">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-medium text-foreground">Alertas</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Revisa productos con inventario bajo.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ir al módulo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Pedidos recientes
                </h2>
                <p className="mt-1 text-sm text-foreground/60">
                  Últimos movimientos registrados
                </p>
              </div>

              <Link
                href="/admin/orders"
                className="text-sm font-medium text-primary transition hover:opacity-80"
              >
                Ver todos
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {isLoading && (
                <div className="rounded-[24px] border border-border bg-background py-10 text-center text-sm text-foreground/60">
                  Cargando resumen del dashboard...
                </div>
              )}

              {!isLoading && recentOrders.length === 0 && (
                <div className="rounded-[24px] border border-dashed border-border bg-background py-10 text-center text-sm text-foreground/60">
                  Todavía no hay pedidos registrados.
                </div>
              )}

              {!isLoading &&
                recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-[24px] border border-border bg-background p-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="font-medium text-foreground">
                          Pedido #{order.id}
                        </p>
                        <p className="mt-1 text-sm text-foreground/60">
                          {order.usuario?.nombre || "Cliente"} ·{" "}
                          {order.usuario?.correo || "Sin correo"}
                        </p>
                        <p className="mt-1 text-xs text-foreground/45">
                          {formatDate(order.fecha_pedido)}
                        </p>
                      </div>

                      <div className="text-left md:text-right">
                        <p className="font-medium text-foreground">
                          ${formatCurrency(order.total)}
                        </p>
                        <span
                          className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                            order.estado === "pendiente"
                              ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                              : order.estado === "en_preparacion"
                              ? "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300"
                              : order.estado === "enviado"
                              ? "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                              : order.estado === "entregado"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                              : "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300"
                          }`}
                        >
                          {order.estado === "en_preparacion"
                            ? "En preparación"
                            : order.estado.charAt(0).toUpperCase() +
                              order.estado.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-border bg-card p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Alertas recientes de inventario
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                Productos que requieren reposición o seguimiento
              </p>
            </div>

            <Link
              href="/admin/alerts"
              className="text-sm font-medium text-primary transition hover:opacity-80"
            >
              Ver alertas
            </Link>
          </div>

          <div className="mt-6 overflow-x-auto">
            {isLoading && (
              <div className="rounded-[24px] border border-border bg-background py-10 text-center text-sm text-foreground/60">
                Cargando alertas...
              </div>
            )}

            {!isLoading && recentAlerts.length === 0 && (
              <div className="rounded-[24px] border border-dashed border-border bg-background py-10 text-center text-sm text-foreground/60">
                No hay alertas activas por el momento.
              </div>
            )}

            {!isLoading && recentAlerts.length > 0 && (
              <table className="min-w-full border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                      Producto
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                      Categoría
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                      Stock
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                      Mínimo
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                      Fecha
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentAlerts.map((alert) => (
                    <tr
                      key={alert.id}
                      className="rounded-[22px] bg-background shadow-sm"
                    >
                      <td className="rounded-l-[22px] px-4 py-4">
                        <p className="font-medium text-foreground">
                          {alert.producto?.nombre || "Producto"}
                        </p>
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground/70">
                        {alert.categoria?.nombre || "Sin categoría"}
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-500/10 dark:text-red-300">
                          {alert.producto?.stock ?? 0}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-foreground/70">
                        {alert.producto?.stock_minimo ?? 0}
                      </td>
                      <td className="rounded-r-[22px] px-4 py-4 text-sm text-foreground/70">
                        {formatDate(alert.fecha_alerta)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
