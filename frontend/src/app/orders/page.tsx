"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ShoppingBag, XCircle } from "lucide-react";
import {
  useGetMyOrdersQuery,
  useCancelOrderMutation,
} from "@/app/state/services/orderApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";
import { toast } from "sonner";

const statusStyles: Record<string, string> = {
  pendiente:
    "bg-[#fff3e6] text-[#c77b2f] dark:bg-yellow-950/30 dark:text-yellow-300",
  en_preparacion:
    "bg-[#eef4ff] text-[#4d73c9] dark:bg-blue-950/30 dark:text-blue-300",
  enviado:
    "bg-[#eef7f2] text-[#3b8f65] dark:bg-emerald-950/30 dark:text-emerald-300",
  entregado:
    "bg-[#eaf8ef] text-[#2f8a52] dark:bg-green-950/30 dark:text-green-300",
  cancelado: "bg-[#fdecec] text-[#c45b5b] dark:bg-red-950/30 dark:text-red-300",
};

const statusLabels: Record<string, string> = {
  pendiente: "Pendiente",
  en_preparacion: "En preparación",
  enviado: "Enviado",
  entregado: "Entregado",
  cancelado: "Cancelado",
};

export default function OrdersPage() {
  const router = useRouter();

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const shouldSkip = !isAuthenticated || user?.rol === "administrador";

  const {
    data: orders = [],
    isLoading,
    isError,
    refetch,
  } = useGetMyOrdersQuery(undefined, {
    skip: shouldSkip,
  });

  const [cancelOrder, { isLoading: isCancelling }] = useCancelOrderMutation();

  const handleCancelOrder = async (orderId: number) => {
    try {
      await cancelOrder(orderId).unwrap();
      toast.success("Pedido cancelado correctamente");
      refetch();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo cancelar el pedido");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Inicia sesión para ver tus pedidos
          </h1>
          <p className="mt-3 text-foreground/70">
            Necesitas iniciar sesión para consultar tu historial de compras.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Ir a iniciar sesión
          </button>
        </div>
      </main>
    );
  }

  if (user?.rol === "administrador") {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Esta sección no está disponible para administradores
          </h1>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-foreground shadow-sm">
          Cargando pedidos...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-red-500 shadow-sm">
          No se pudieron cargar tus pedidos.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Historial
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            Mis pedidos
          </h1>

          <p className="mt-2 text-sm text-foreground/60">
            Consulta el estado de tus compras recientes
          </p>
        </section>

        <section className="mt-12">
          {orders.length === 0 ? (
            <div className="rounded-[32px] border border-border bg-card p-12 text-center shadow-sm">
              <ShoppingBag className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 text-2xl font-semibold text-foreground">
                Aún no tienes pedidos
              </h2>
              <p className="mt-2 text-foreground/70">
                Cuando realices una compra, aquí podrás ver todo tu historial.
              </p>
              <button
                onClick={() => router.push("/products")}
                className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explorar productos
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order) => {
                const firstThree = order.detalles.slice(0, 3);
                const extraCount =
                  order.detalles.length > 3 ? order.detalles.length - 3 : 0;

                return (
                  <article
                    key={order.id}
                    className="overflow-hidden rounded-[32px] border border-border bg-card shadow-sm"
                  >
                    <div className="p-6">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-xl font-semibold text-foreground">
                            Pedido #{order.id}
                          </h2>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              statusStyles[order.estado] ||
                              "bg-secondary text-foreground"
                            }`}
                          >
                            {statusLabels[order.estado] || order.estado}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {firstThree.map((detail) => (
                          <div
                            key={detail.id}
                            className="flex items-center gap-4 rounded-[22px] border border-border bg-background p-4"
                          >
                            <div className="relative h-20 w-20 overflow-hidden rounded-[18px] bg-card">
                              <Image
                                src={
                                  detail.producto?.imagen_url ||
                                  "/placeholder-product.png"
                                }
                                alt={
                                  detail.producto?.nombre ||
                                  "Producto no disponible"
                                }
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="truncate text-sm font-semibold text-foreground">
                                {detail.producto?.nombre ||
                                  "Producto no disponible"}
                              </h3>

                              <p className="mt-1 text-sm text-foreground/65">
                                Cantidad: {detail.cantidad}
                              </p>

                              {detail.producto_talla && (
                                <p className="mt-1 text-sm text-foreground/65">
                                  Talla: {detail.producto_talla.talla}
                                </p>
                              )}

                              <p className="mt-1 text-sm text-foreground/65">
                                $
                                {Number(detail.subtotal).toLocaleString(
                                  "es-MX",
                                  {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {extraCount > 0 && (
                        <p className="mt-4 text-sm text-foreground/60">
                          y {extraCount} producto{extraCount > 1 ? "s" : ""}{" "}
                          más.
                        </p>
                      )}

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                          onClick={() =>
                            router.push(`/orders/detail?id=${order.id}`)
                          }
                          className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                        >
                          Ver detalle
                        </button>

                        {order.estado === "pendiente" && (
                          <button
                            onClick={() => handleCancelOrder(order.id)}
                            disabled={isCancelling}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                          >
                            <XCircle className="h-4 w-4" />
                            Cancelar pedido
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
