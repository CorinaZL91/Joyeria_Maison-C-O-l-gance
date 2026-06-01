"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CreditCard,
  PackageSearch,
  Store,
  XCircle,
} from "lucide-react";
import {
  useCancelOrderMutation,
  useGetOrderByIdQuery,
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

const paymentLabels: Record<string, string> = {
  tarjeta: "Tarjeta",
  tienda: "Pago en tienda",
};

export default function OrderDetailClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = Number(searchParams.get("id"));

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const shouldSkip =
    !isAuthenticated || user?.rol === "administrador" || Number.isNaN(orderId);

  const {
    data: order,
    isLoading,
    isError,
    refetch,
  } = useGetOrderByIdQuery(orderId, {
    skip: shouldSkip,
  });

  const [cancelOrder, { isLoading: isCancelling }] = useCancelOrderMutation();

  const handleCancelOrder = async () => {
    if (!order) return;

    try {
      await cancelOrder(order.id).unwrap();
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
            Inicia sesión para ver este pedido
          </h1>
          <p className="mt-3 text-foreground/70">
            Necesitas iniciar sesión para consultar el detalle de tu compra.
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
            Esta vista no está disponible para administradores
          </h1>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-foreground shadow-sm">
          Cargando detalle del pedido...
        </div>
      </main>
    );
  }

  if (isError || !order) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-red-500 shadow-sm">
          No se pudo cargar el pedido.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => router.push("/orders")}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a mis pedidos
        </button>

        <section className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
            Pedido
          </p>

          <h1 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
            Detalle #{order.id}
          </h1>

          <div className="mx-auto mt-3 h-[2px] w-16 rounded-full bg-primary/40" />

          <p className="mt-3 text-sm text-foreground/60">
            Revisa el estado, productos y total de tu compra
          </p>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <section className="space-y-6">
            <article className="overflow-hidden rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] shadow-sm dark:border-border dark:bg-card">
              <div className="border-b border-[#f0dde2] bg-white/70 px-6 py-5 dark:border-border dark:bg-background/40">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-[#8f5d6f] dark:text-foreground">
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

                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/65">
                      <span>
                        Fecha:{" "}
                        {new Date(order.fecha_pedido).toLocaleDateString(
                          "es-MX",
                          {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        {order.metodo_pago === "tarjeta" ? (
                          <CreditCard className="h-4 w-4" />
                        ) : (
                          <Store className="h-4 w-4" />
                        )}
                        {paymentLabels[order.metodo_pago] || order.metodo_pago}
                      </span>
                    </div>
                  </div>

                  {order.estado === "pendiente" && (
                    <button
                      onClick={handleCancelOrder}
                      disabled={isCancelling}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f06c96] to-[#ea4f7f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                    >
                      <XCircle className="h-4 w-4" />
                      Cancelar pedido
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {order.detalles.map((detail) => (
                    <article
                      key={detail.id}
                      className="flex flex-col gap-4 rounded-[26px] border border-[#f0dde2] bg-white/80 p-4 shadow-sm dark:border-border dark:bg-background sm:flex-row"
                    >
                      <div className="relative h-28 w-full overflow-hidden rounded-[20px] bg-card sm:h-28 sm:w-28">
                        <Image
                          src={
                            detail.producto?.imagen_url ||
                            "/placeholder-product.png"
                          }
                          alt={
                            detail.producto?.nombre || "Producto no disponible"
                          }
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                            Producto
                          </p>

                          <h3 className="mt-1 text-lg font-semibold text-foreground">
                            {detail.producto?.nombre ||
                              "Producto no disponible"}
                          </h3>

                          <p className="mt-1 text-sm text-foreground/65">
                            Material:{" "}
                            {detail.producto?.material || "No especificado"}
                          </p>

                          {detail.producto_talla && (
                            <p className="mt-1 text-sm text-foreground/65">
                              Talla: {detail.producto_talla.talla}
                            </p>
                          )}

                          <p className="mt-1 text-sm text-foreground/65">
                            Cantidad: {detail.cantidad}
                          </p>
                        </div>

                        <div className="rounded-[22px] bg-[#f9edf1] px-4 py-3 text-left shadow-sm dark:bg-card sm:min-w-[150px] sm:text-right">
                          <p className="text-xs uppercase tracking-[0.2em] text-[#b57a8b] dark:text-primary">
                            Subtotal
                          </p>
                          <p className="mt-1 text-lg font-bold text-[#8f5d6f] dark:text-foreground">
                            $
                            {Number(detail.subtotal).toLocaleString("es-MX", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </article>
          </section>

          <aside className="h-fit rounded-[32px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-6 shadow-sm dark:border-border dark:bg-card lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <PackageSearch className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Resumen</h2>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Pedido</span>
                <span>#{order.id}</span>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Productos</span>
                <span>
                  {order.detalles.reduce(
                    (acc, detail) => acc + detail.cantidad,
                    0
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Método de pago</span>
                <span>
                  {paymentLabels[order.metodo_pago] || order.metodo_pago}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Estado</span>
                <span>{statusLabels[order.estado] || order.estado}</span>
              </div>

              <div className="border-t border-[#f0dde2] pt-4 dark:border-border">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b57a8b] dark:text-primary">
                  Total
                </p>
                <p className="mt-2 text-3xl font-bold text-[#8f5d6f] dark:text-foreground">
                  $
                  {Number(order.total).toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
