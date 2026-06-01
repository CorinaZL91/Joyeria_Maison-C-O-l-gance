"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  CreditCard,
  Store,
  ArrowLeft,
  Home,
  Building2,
  Mailbox,
} from "lucide-react";
import { useGetCartQuery } from "@/app/state/services/cartApi";
import { useCreateOrderMutation } from "@/app/state/services/orderApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";
import { toast } from "sonner";

export default function CheckoutConfirmPage() {
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

  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();

  const [metodoPago, setMetodoPago] = useState<"tarjeta" | "tienda" | "">("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");

  const [shippingStreet, setShippingStreet] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingPostalCode, setShippingPostalCode] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedMethod = sessionStorage.getItem("checkout_metodo_pago") || "";
    const savedCardNumber =
      sessionStorage.getItem("checkout_card_number") || "";
    const savedCardName = sessionStorage.getItem("checkout_card_name") || "";

    const savedShippingStreet =
      sessionStorage.getItem("checkout_shipping_street") || "";
    const savedShippingCity =
      sessionStorage.getItem("checkout_shipping_city") || "";
    const savedShippingPostalCode =
      sessionStorage.getItem("checkout_shipping_postal_code") || "";

    const metodoNormalizado =
      savedMethod === "tarjeta" || savedMethod === "tienda" ? savedMethod : "";

    setMetodoPago(metodoNormalizado);
    setCardNumber(savedCardNumber);
    setCardName(savedCardName);

    setShippingStreet(savedShippingStreet || user?.direccion_calle || "");
    setShippingCity(savedShippingCity || user?.direccion_ciudad || "");
    setShippingPostalCode(
      savedShippingPostalCode || user?.direccion_codigo_postal || ""
    );

    if (!metodoNormalizado) {
      router.push("/checkout/method");
      return;
    }

    if (metodoNormalizado === "tarjeta") {
      const hasCardData = savedCardNumber && savedCardName;
      const hasShippingData =
        (savedShippingStreet || user?.direccion_calle) &&
        (savedShippingCity || user?.direccion_ciudad) &&
        (savedShippingPostalCode || user?.direccion_codigo_postal);

      if (!hasCardData || !hasShippingData) {
        router.push("/checkout/payment");
      }
    }
  }, [
    router,
    user?.direccion_calle,
    user?.direccion_ciudad,
    user?.direccion_codigo_postal,
  ]);

  const maskedCardNumber = useMemo(() => {
    if (!cardNumber) return "";
    const cleaned = cardNumber.replace(/\s/g, "");
    if (cleaned.length < 4) return cardNumber;
    return `**** **** **** ${cleaned.slice(-4)}`;
  }, [cardNumber]);

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Inicia sesión para continuar
          </h1>
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
          Cargando confirmación...
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
            No hay productos para confirmar.
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
  const iva = Number((subtotal * 0.16).toFixed(2));
  const totalFinal = Number((subtotal + iva).toFixed(2));

  const handleConfirmOrder = async () => {
    if (!metodoPago || (metodoPago !== "tarjeta" && metodoPago !== "tienda")) {
      toast.error("Selecciona un método de compra válido");
      router.push("/checkout/method");
      return;
    }

    if (metodoPago === "tarjeta") {
      const hasShippingData =
        shippingStreet.trim() &&
        shippingCity.trim() &&
        shippingPostalCode.trim();

      if (!hasShippingData) {
        toast.error("Faltan datos de dirección");
        router.push("/checkout/payment");
        return;
      }
    }

    try {
      const response = await createOrder({
        metodo_pago: metodoPago,
        ...(metodoPago === "tarjeta"
          ? {
              direccion_calle: shippingStreet.trim(),
              direccion_ciudad: shippingCity.trim(),
              direccion_codigo_postal: shippingPostalCode.trim(),
            }
          : {}),
      }).unwrap();

      sessionStorage.removeItem("checkout_metodo_pago");
      sessionStorage.removeItem("checkout_card_number");
      sessionStorage.removeItem("checkout_card_name");
      sessionStorage.removeItem("checkout_expiry_date");
      sessionStorage.removeItem("checkout_cvv");
      sessionStorage.removeItem("checkout_shipping_street");
      sessionStorage.removeItem("checkout_shipping_city");
      sessionStorage.removeItem("checkout_shipping_postal_code");

      toast.success("Pedido realizado correctamente");

      router.push(`/orders/detail?id=${response.id}`);
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo confirmar el pedido");
    }
  };

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
                    step <= 4
                      ? "bg-primary text-white"
                      : "bg-[#ead8c4] text-[#7f6a57]"
                  }`}
                >
                  {step}
                </div>
                {index < 3 && <div className="h-[3px] flex-1 bg-primary" />}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <section className="space-y-6">
            <section className="rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-6 shadow-sm dark:border-border dark:bg-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    Confirmación final
                  </h2>
                  <p className="text-sm text-foreground/65">
                    Verifica los datos antes de finalizar tu pedido.
                  </p>
                </div>
              </div>

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
                            item.producto.imagen_url ||
                            "/placeholder-product.png"
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

            {metodoPago === "tarjeta" && (
              <section className="rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-6 shadow-sm dark:border-border dark:bg-card">
                <h2 className="text-xl font-semibold text-foreground">
                  Dirección de envío
                </h2>

                <div className="mt-5 grid grid-cols-1 gap-4">
                  <div className="rounded-[22px] border border-[#f0dde2] bg-white/80 p-4 dark:border-border dark:bg-background">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Home className="h-4 w-4 text-primary" />
                      Calle y número
                    </div>
                    <p className="text-sm text-foreground/70">
                      {shippingStreet}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-[#f0dde2] bg-white/80 p-4 dark:border-border dark:bg-background">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Building2 className="h-4 w-4 text-primary" />
                      Ciudad
                    </div>
                    <p className="text-sm text-foreground/70">{shippingCity}</p>
                  </div>

                  <div className="rounded-[22px] border border-[#f0dde2] bg-white/80 p-4 dark:border-border dark:bg-background">
                    <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
                      <Mailbox className="h-4 w-4 text-primary" />
                      Código postal
                    </div>
                    <p className="text-sm text-foreground/70">
                      {shippingPostalCode}
                    </p>
                  </div>
                </div>
              </section>
            )}
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

              <div className="flex items-center justify-between text-sm text-foreground/70">
                <span>Método</span>
                <span className="inline-flex items-center gap-2">
                  {metodoPago === "tarjeta" ? (
                    <>
                      <CreditCard className="h-4 w-4 text-primary" />
                      Tarjeta
                    </>
                  ) : (
                    <>
                      <Store className="h-4 w-4 text-primary" />
                      Recoger en tienda
                    </>
                  )}
                </span>
              </div>

              {metodoPago === "tarjeta" && cardName && (
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Titular</span>
                  <span className="max-w-[160px] truncate text-right">
                    {cardName}
                  </span>
                </div>
              )}

              {metodoPago === "tarjeta" && maskedCardNumber && (
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Tarjeta</span>
                  <span>{maskedCardNumber}</span>
                </div>
              )}

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

            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() =>
                  router.push(
                    metodoPago === "tarjeta"
                      ? "/checkout/payment"
                      : "/checkout/method"
                  )
                }
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver
              </button>

              <button
                onClick={handleConfirmOrder}
                disabled={isCreatingOrder}
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isCreatingOrder ? "Procesando..." : "Confirmar pedido"}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
