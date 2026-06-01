"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, CreditCard, Store } from "lucide-react";
import { useGetCartQuery } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function CheckoutMethodPage() {
  const router = useRouter();

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const [selectedMethod, setSelectedMethod] = useState<
    "tienda" | "tarjeta" | ""
  >("");

  const shouldSkip = !isAuthenticated || user?.rol === "administrador";

  const {
    data: cart,
    isLoading,
    isError,
  } = useGetCartQuery(undefined, {
    skip: shouldSkip,
  });

  useEffect(() => {
    const savedMethod = sessionStorage.getItem("checkout_metodo_pago");

    if (savedMethod === "tienda" || savedMethod === "tarjeta") {
      setSelectedMethod(savedMethod);
    }
  }, []);

  const handleContinue = () => {
    if (!selectedMethod) return;

    sessionStorage.setItem("checkout_metodo_pago", selectedMethod);

    // 🔥 NUEVA LÓGICA INTELIGENTE
    if (selectedMethod === "tarjeta") {
      const tieneDireccionGuardada =
        user?.direccion_calle &&
        user?.direccion_ciudad &&
        user?.direccion_codigo_postal;

      if (tieneDireccionGuardada) {
        // Ya tiene dirección → ir directo a confirmación
        router.push("/checkout/confirm");
      } else {
        // No tiene → pedir datos en payment
        router.push("/checkout/payment");
      }
      return;
    }

    // Pago en tienda
    router.push("/checkout/confirm");
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Inicia sesión para continuar
          </h1>
          <p className="mt-3 text-foreground/70">
            Necesitas iniciar sesión para continuar con tu compra.
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
          Cargando método de compra...
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

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Método de compra
          </h1>
        </section>

        <section className="rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-8 shadow-sm dark:border-border dark:bg-card">
          <div className="mx-auto max-w-xl">
            <h2 className="text-center text-2xl font-semibold">
              Selecciona método
            </h2>

            <div className="mt-8 space-y-4">
              {/* TIENDA */}
              <label
                className={`flex cursor-pointer items-center gap-4 rounded-[24px] border px-5 py-5 transition ${
                  selectedMethod === "tienda"
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:bg-secondary/40"
                }`}
              >
                <input
                  type="radio"
                  checked={selectedMethod === "tienda"}
                  onChange={() => setSelectedMethod("tienda")}
                />

                <Store className="h-6 w-6 text-primary" />

                <div>
                  <p className="font-semibold">Recoger en tienda</p>
                  <p className="text-sm text-muted-foreground">
                    No necesitas dirección
                  </p>
                </div>
              </label>

              {/* TARJETA */}
              <label
                className={`flex cursor-pointer items-center gap-4 rounded-[24px] border px-5 py-5 transition ${
                  selectedMethod === "tarjeta"
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:bg-secondary/40"
                }`}
              >
                <input
                  type="radio"
                  checked={selectedMethod === "tarjeta"}
                  onChange={() => setSelectedMethod("tarjeta")}
                />

                <CreditCard className="h-6 w-6 text-primary" />

                <div>
                  <p className="font-semibold">Pago con tarjeta</p>
                  <p className="text-sm text-muted-foreground">
                    Se pedirá dirección si es necesario
                  </p>
                </div>
              </label>
            </div>

            <div className="mt-10 flex justify-between">
              <button
                onClick={() => router.push("/checkout")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Regresar
              </button>

              <button
                onClick={handleContinue}
                disabled={!selectedMethod}
                className="rounded-full bg-primary px-6 py-2 text-white disabled:opacity-50"
              >
                Continuar
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
