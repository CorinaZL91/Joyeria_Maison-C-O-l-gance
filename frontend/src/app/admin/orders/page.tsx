"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ClipboardList, Eye, PackageSearch, Search, X } from "lucide-react";
import { toast } from "sonner";
import { Order, EstadoPedido } from "@/app/models/Order";
import {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} from "@/app/state/services/orderApi";

const statusOptions: { value: EstadoPedido; label: string }[] = [
  { value: "pendiente", label: "Pendiente" },
  { value: "en_preparacion", label: "En preparación" },
  { value: "enviado", label: "Enviado" },
  { value: "entregado", label: "Entregado" },
  { value: "cancelado", label: "Cancelado" },
];

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
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return date;
  }
}

function getStatusClasses(status: EstadoPedido) {
  switch (status) {
    case "pendiente":
      return "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300";
    case "en_preparacion":
      return "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300";
    case "enviado":
      return "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300";
    case "entregado":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300";
    case "cancelado":
      return "bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300";
    default:
      return "bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-white/70";
  }
}

function getStatusLabel(status: EstadoPedido) {
  return (
    statusOptions.find((option) => option.value === status)?.label || status
  );
}

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const { data: orders = [], isLoading, isError } = useGetAllOrdersQuery();

  const [updateOrderStatus, { isLoading: isUpdatingStatus }] =
    useUpdateOrderStatusMutation();

  const filteredOrders = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return orders;

    return orders.filter((order) => {
      const orderId = String(order.id);
      const customerName = order.usuario?.nombre?.toLowerCase() || "";
      const customerEmail = order.usuario?.correo?.toLowerCase() || "";
      const status = order.estado.toLowerCase();
      const paymentMethod = order.metodo_pago.toLowerCase();

      return (
        orderId.includes(term) ||
        customerName.includes(term) ||
        customerEmail.includes(term) ||
        status.includes(term) ||
        paymentMethod.includes(term)
      );
    });
  }, [orders, search]);

  const handleStatusChange = async (orderId: number, estado: EstadoPedido) => {
    try {
      await updateOrderStatus({ id: orderId, estado }).unwrap();
      toast.success("Estado del pedido actualizado correctamente");

      if (selectedOrder?.id === orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, estado } : prev));
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || "No se pudo actualizar el estado del pedido"
      );
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[34px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#be7a8f] dark:border-border dark:bg-background/70 dark:text-primary">
                <ClipboardList className="h-3.5 w-3.5" />
                Administración
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-[#9a6274] dark:text-foreground md:text-4xl">
                Gestión de pedidos
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9b7883] dark:text-foreground/70">
                Revisa los pedidos realizados por los clientes, consulta sus
                detalles y actualiza el estado de cada compra dentro del flujo
                operativo de Maison C&amp;O Élégance.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Pedidos registrados
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                {filteredOrders.length} pedido(s) encontrado(s)
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
              <input
                type="text"
                placeholder="Buscar por ID, cliente, correo o estado"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-foreground/60">
                Cargando pedidos...
              </div>
            )}

            {isError && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-red-500">
                No se pudieron cargar los pedidos.
              </div>
            )}

            {!isLoading && !isError && filteredOrders.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-background px-6 py-16 text-center">
                <PackageSearch className="h-10 w-10 text-foreground/35" />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  No hay pedidos para mostrar
                </h3>
                <p className="mt-2 max-w-md text-sm text-foreground/60">
                  Todavía no se han registrado pedidos o no hay coincidencias
                  con la búsqueda actual.
                </p>
              </div>
            )}

            {!isLoading && !isError && filteredOrders.length > 0 && (
              <div className="mt-2 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-3">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Pedido
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Cliente
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Fecha
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Pago
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Total
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Estado
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Acciones
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="rounded-[22px] bg-background shadow-sm"
                      >
                        <td className="rounded-l-[22px] px-4 py-4 align-middle">
                          <div>
                            <p className="font-medium text-foreground">
                              Pedido #{order.id}
                            </p>
                            <p className="mt-1 text-xs text-foreground/45">
                              {order.detalles?.length || 0} producto(s)
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/75">
                          <div>
                            <p className="font-medium text-foreground">
                              {order.usuario?.nombre || "Cliente"}
                            </p>
                            <p className="mt-1 text-xs text-foreground/50">
                              {order.usuario?.correo || "Sin correo"}
                            </p>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/75">
                          {formatDate(order.fecha_pedido)}
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/75 capitalize">
                          {order.metodo_pago}
                        </td>

                        <td className="px-4 py-4 text-sm font-medium text-foreground">
                          ${formatCurrency(order.total)}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusClasses(
                              order.estado
                            )}`}
                          >
                            {getStatusLabel(order.estado)}
                          </span>
                        </td>

                        <td className="rounded-r-[22px] px-4 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <select
                              value={order.estado}
                              onChange={(e) =>
                                handleStatusChange(
                                  order.id,
                                  e.target.value as EstadoPedido
                                )
                              }
                              disabled={isUpdatingStatus}
                              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground outline-none transition focus:border-primary disabled:opacity-50"
                            >
                              {statusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>

                            <button
                              onClick={() => setSelectedOrder(order)}
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
                            >
                              <Eye className="h-4 w-4" />
                              Ver detalle
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-[30px] border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Pedido #{selectedOrder.id}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Consulta la información completa del pedido.
                </p>
              </div>

              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-full border border-border p-2 text-foreground/70 transition hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto px-6 py-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Cliente
                  </h4>
                  <div className="mt-4 space-y-2 text-sm text-foreground/75">
                    <p>
                      <span className="font-medium text-foreground">
                        Nombre:
                      </span>{" "}
                      {selectedOrder.usuario?.nombre || "No disponible"}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Correo:
                      </span>{" "}
                      {selectedOrder.usuario?.correo || "No disponible"}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Teléfono:
                      </span>{" "}
                      {selectedOrder.usuario?.telefono || "No disponible"}
                    </p>
                    <div>
                      <p className="font-medium text-foreground">Dirección:</p>

                      {selectedOrder.metodo_pago === "tarjeta" ? (
                        selectedOrder.direccion_calle ||
                        selectedOrder.direccion_ciudad ||
                        selectedOrder.direccion_codigo_postal ? (
                          <div className="mt-1 text-sm text-foreground/70">
                            <p>{selectedOrder.direccion_calle}</p>
                            <p>{selectedOrder.direccion_ciudad}</p>
                            <p>C.P. {selectedOrder.direccion_codigo_postal}</p>
                          </div>
                        ) : (
                          <p className="mt-1 text-sm text-foreground/70">
                            No disponible
                          </p>
                        )
                      ) : (
                        <p className="mt-1 text-sm text-foreground/70">
                          Recoger en tienda
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-background p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Resumen del pedido
                  </h4>
                  <div className="mt-4 space-y-2 text-sm text-foreground/75">
                    <p>
                      <span className="font-medium text-foreground">
                        Fecha:
                      </span>{" "}
                      {formatDate(selectedOrder.fecha_pedido)}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Método de pago:
                      </span>{" "}
                      {selectedOrder.metodo_pago}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Estado:
                      </span>{" "}
                      <span
                        className={`ml-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${getStatusClasses(
                          selectedOrder.estado
                        )}`}
                      >
                        {getStatusLabel(selectedOrder.estado)}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Total:
                      </span>{" "}
                      ${formatCurrency(selectedOrder.total)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-border bg-background p-5">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                  Productos del pedido
                </h4>

                <div className="mt-4 space-y-4">
                  {selectedOrder.detalles?.map((detail) => (
                    <div
                      key={detail.id}
                      className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#f7f0f2] dark:bg-secondary">
                          <Image
                            src={
                              detail.producto?.imagen_url ||
                              "/placeholder-product.png"
                            }
                            alt={detail.producto?.nombre || "Producto"}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <p className="font-medium text-foreground">
                            {detail.producto?.nombre || "Producto"}
                          </p>

                          {detail.producto_talla && (
                            <p className="mt-1 text-sm text-foreground/60">
                              Talla: {detail.producto_talla.talla}
                            </p>
                          )}

                          <p className="mt-1 text-sm text-foreground/60">
                            Cantidad: {detail.cantidad}
                          </p>

                          <p className="mt-1 text-sm text-foreground/60">
                            Precio unitario: $
                            {formatCurrency(detail.precio_unitario)}
                          </p>
                        </div>
                      </div>

                      <div className="text-sm font-medium text-foreground">
                        Subtotal: ${formatCurrency(detail.subtotal)}
                      </div>
                    </div>
                  ))}

                  {(!selectedOrder.detalles ||
                    selectedOrder.detalles.length === 0) && (
                    <p className="text-sm text-foreground/60">
                      No hay detalles disponibles para este pedido.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end border-t border-border px-6 py-5">
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
