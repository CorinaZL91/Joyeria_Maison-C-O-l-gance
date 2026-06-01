"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  BellRing,
  CheckCircle2,
  Eye,
  PackageSearch,
  Search,
  X,
} from "lucide-react";
import { toast } from "sonner";
import type { StockAlert } from "@/app/models/Alert";

import {
  useDeactivateAlertMutation,
  useGetActiveAlertsQuery,
} from "@/app/state/services/alertApi";

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

export default function AdminAlertsPage() {
  const [search, setSearch] = useState("");
  const [selectedAlert, setSelectedAlert] = useState<StockAlert | null>(null);

  const { data: alerts = [], isLoading, isError } = useGetActiveAlertsQuery();

  const [deactivateAlert, { isLoading: isDeactivating }] =
    useDeactivateAlertMutation();

  const filteredAlerts = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return alerts;

    return alerts.filter((alert) => {
      const productName = alert.producto?.nombre?.toLowerCase() || "";
      const categoryName = alert.categoria?.nombre?.toLowerCase() || "";
      const stock = String(alert.producto?.stock ?? "");
      const minStock = String(alert.producto?.stock_minimo ?? "");
      const status = alert.activa ? "activa" : "inactiva";

      return (
        productName.includes(term) ||
        categoryName.includes(term) ||
        stock.includes(term) ||
        minStock.includes(term) ||
        status.includes(term) ||
        String(alert.id).includes(term)
      );
    });
  }, [alerts, search]);

  const handleDeactivate = async (alertId: number) => {
    try {
      await deactivateAlert(alertId).unwrap();
      toast.success("Alerta desactivada correctamente");

      if (selectedAlert?.id === alertId) {
        setSelectedAlert((prev) => (prev ? { ...prev, activa: false } : prev));
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo desactivar la alerta");
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[34px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#be7a8f] dark:border-border dark:bg-background/70 dark:text-primary">
                <BellRing className="h-3.5 w-3.5" />
                Administración
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-[#9a6274] dark:text-foreground md:text-4xl">
                Alertas de stock
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9b7883] dark:text-foreground/70">
                Supervisa los productos con inventario bajo para actuar a tiempo
                y mantener disponible el catálogo de Maison C&amp;O Élégance.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Alertas activas
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                {filteredAlerts.length} alerta(s) encontrada(s)
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
              <input
                type="text"
                placeholder="Buscar por producto, categoría o stock"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-foreground/60">
                Cargando alertas...
              </div>
            )}

            {isError && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-red-500">
                No se pudieron cargar las alertas.
              </div>
            )}

            {!isLoading && !isError && filteredAlerts.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-background px-6 py-16 text-center">
                <PackageSearch className="h-10 w-10 text-foreground/35" />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  No hay alertas activas
                </h3>
                <p className="mt-2 max-w-md text-sm text-foreground/60">
                  Todo parece estar bajo control o no hay coincidencias con la
                  búsqueda actual.
                </p>
              </div>
            )}

            {!isLoading && !isError && filteredAlerts.length > 0 && (
              <div className="mt-2 overflow-x-auto">
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
                        Stock actual
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Stock mínimo
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Fecha
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
                    {filteredAlerts.map((alert) => (
                      <tr
                        key={alert.id}
                        className="rounded-[22px] bg-background shadow-sm"
                      >
                        <td className="rounded-l-[22px] px-4 py-4 align-middle">
                          <div className="flex min-w-[240px] items-center gap-4">
                            <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-[#f7f0f2] dark:bg-secondary">
                              <Image
                                src={
                                  alert.producto?.imagen_url ||
                                  "/placeholder-product.png"
                                }
                                alt={alert.producto?.nombre || "Producto"}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div>
                              <p className="font-medium text-foreground">
                                {alert.producto?.nombre || "Producto"}
                              </p>
                              <p className="mt-1 text-xs text-red-500">
                                Inventario bajo detectado
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/70">
                          {alert.categoria?.nombre || "Sin categoría"}
                        </td>

                        <td className="px-4 py-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-500/10 dark:text-red-300">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            {alert.producto?.stock ?? 0}
                          </span>
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/70">
                          {alert.producto?.stock_minimo ?? 0}
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/70">
                          {formatDate(alert.fecha_alerta)}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                              alert.activa
                                ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                            }`}
                          >
                            {alert.activa ? "Activa" : "Atendida"}
                          </span>
                        </td>

                        <td className="rounded-r-[22px] px-4 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedAlert(alert)}
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
                            >
                              <Eye className="h-4 w-4" />
                              Ver detalle
                            </button>

                            <button
                              onClick={() => handleDeactivate(alert.id)}
                              disabled={isDeactivating || !alert.activa}
                              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-50 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                            >
                              <CheckCircle2 className="h-4 w-4" />
                              Marcar atendida
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

      {selectedAlert && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Alerta #{selectedAlert.id}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Información detallada de la alerta de stock.
                </p>
              </div>

              <button
                onClick={() => setSelectedAlert(null)}
                className="rounded-full border border-border p-2 text-foreground/70 transition hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 py-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Producto
                  </h4>

                  <div className="mt-4 flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-[#f7f0f2] dark:bg-secondary">
                      <Image
                        src={
                          selectedAlert.producto?.imagen_url ||
                          "/placeholder-product.png"
                        }
                        alt={selectedAlert.producto?.nombre || "Producto"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-medium text-foreground">
                        {selectedAlert.producto?.nombre || "Producto"}
                      </p>
                      <p className="mt-1 text-sm text-foreground/60">
                        Categoría:{" "}
                        {selectedAlert.categoria?.nombre || "Sin categoría"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-border bg-background p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/45">
                    Estado de inventario
                  </h4>

                  <div className="mt-4 space-y-2 text-sm text-foreground/75">
                    <p>
                      <span className="font-medium text-foreground">
                        Stock actual:
                      </span>{" "}
                      {selectedAlert.producto?.stock ?? 0}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Stock mínimo:
                      </span>{" "}
                      {selectedAlert.producto?.stock_minimo ?? 0}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Fecha de alerta:
                      </span>{" "}
                      {formatDate(selectedAlert.fecha_alerta)}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Estado:
                      </span>{" "}
                      <span
                        className={`ml-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          selectedAlert.activa
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300"
                            : "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                        }`}
                      >
                        {selectedAlert.activa ? "Activa" : "Atendida"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t border-border px-6 py-5 sm:flex-row sm:justify-end">
              <button
                onClick={() => setSelectedAlert(null)}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                Cerrar
              </button>

              <button
                onClick={() => handleDeactivate(selectedAlert.id)}
                disabled={isDeactivating || !selectedAlert.activa}
                className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              >
                Marcar como atendida
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
