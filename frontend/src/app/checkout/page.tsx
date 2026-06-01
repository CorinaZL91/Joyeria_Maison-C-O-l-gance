"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGetCartQuery } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function CheckoutPage() {
  const router = useRouter();

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const shouldSkip = !isAuthenticated || user?.rol === "administrador";

  const {
    data: cart,
    isLoading,
    isError,
  } = useGetCartQuery(undefined, {
    skip: shouldSkip,
  });

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Inicia sesión para continuar
          </h1>
          <p className="mt-3 text-foreground/70">
            Necesitas iniciar sesión para revisar tu compra.
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
          Cargando resumen de compra...
        </div>
      </main>
    );
  }

  if (isError || !cart || cart.items.length === 0) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Tu carrito está vacío
          </h1>
          <p className="mt-3 text-foreground/70">
            Agrega productos antes de continuar con la compra.
          </p>
          <button
            onClick={() => router.push("/products")}
            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Ver productos
          </button>
        </div>
      </main>
    );
  }

  const subtotal = Number(cart.total);
  const iva = subtotal * 0.16;
  const totalFinal = subtotal + iva;

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
            Resumen de compra
          </h1>

          <div className="mx-auto mt-5 flex max-w-md items-center justify-between">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex flex-1 items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                    step === 1
                      ? "bg-primary text-white"
                      : "bg-[#ead8c4] text-[#7f6a57]"
                  }`}
                >
                  {step}
                </div>
                {index < 3 && <div className="h-[3px] flex-1 bg-[#ead8c4]" />}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
          <section className="rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-6 shadow-sm dark:border-border dark:bg-card">
            <div className="space-y-4">
              {cart.items.map((item) => {
                const itemSubtotal =
                  item.subtotal ??
                  Number(item.producto.precio) * Number(item.cantidad);

                return (
                  <article
                    key={item.id}
                    className="flex flex-col gap-4 rounded-[24px] border border-[#f0dde2] bg-white/80 p-4 shadow-sm dark:border-border dark:bg-background sm:flex-row sm:items-center"
                  >
                    <div className="relative h-20 w-20 overflow-hidden rounded-[18px] bg-card">
                      <Image
                        src={
                          item.producto.imagen_url || "/placeholder-product.png"
                        }
                        alt={item.producto.nombre}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-foreground">
                          {item.producto.nombre}
                        </h3>
                        <p className="mt-1 text-sm text-foreground/65">
                          Cantidad: x{item.cantidad}
                        </p>
                        {item.producto.usar_tallas && item.producto_talla && (
                          <p className="mt-1 text-sm text-foreground/65">
                            Talla: {item.producto_talla.talla}
                          </p>
                        )}
                      </div>

                      <p className="text-lg font-semibold text-foreground">
                        $
                        {Number(itemSubtotal).toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <aside className="h-fit rounded-[32px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-6 shadow-sm dark:border-border dark:bg-card lg:sticky lg:top-28">
            <h2 className="text-xl font-semibold text-foreground">Resumen</h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Subtotal</span>
                <span>
                  $
                  {subtotal.toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>IVA (16%)</span>
                <span>
                  $
                  {iva.toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-[#f0dde2] pt-4 text-base font-medium dark:border-border">
                <span>Total</span>
                <span className="text-2xl font-bold text-foreground">
                  $
                  {totalFinal.toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            <button
              onClick={() => router.push("/checkout/method")}
              className="mt-8 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Continuar
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}
