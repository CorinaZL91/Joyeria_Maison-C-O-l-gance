"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  KeyRound,
  User,
  Home,
  Building2,
  Mailbox,
} from "lucide-react";
import { useGetCartQuery } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function CheckoutPaymentPage() {
  const router = useRouter();

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

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

    if (savedMethod !== "tarjeta") {
      router.push("/checkout/method");
      return;
    }

    const savedCardNumber = sessionStorage.getItem("checkout_card_number");
    const savedCardName = sessionStorage.getItem("checkout_card_name");
    const savedExpiryDate = sessionStorage.getItem("checkout_expiry_date");
    const savedCvv = sessionStorage.getItem("checkout_cvv");

    const savedStreet = sessionStorage.getItem("checkout_shipping_street");
    const savedCity = sessionStorage.getItem("checkout_shipping_city");
    const savedPostalCode = sessionStorage.getItem(
      "checkout_shipping_postal_code"
    );

    if (savedCardNumber) setCardNumber(savedCardNumber);
    if (savedCardName) setCardName(savedCardName);
    if (savedExpiryDate) setExpiryDate(savedExpiryDate);
    if (savedCvv) setCvv(savedCvv);

    if (savedStreet) {
      setStreet(savedStreet);
    } else if (user?.direccion_calle) {
      setStreet(user.direccion_calle);
    }

    if (savedCity) {
      setCity(savedCity);
    } else if (user?.direccion_ciudad) {
      setCity(user.direccion_ciudad);
    }

    if (savedPostalCode) {
      setPostalCode(savedPostalCode);
    } else if (user?.direccion_codigo_postal) {
      setPostalCode(user.direccion_codigo_postal);
    }
  }, [
    router,
    user?.direccion_calle,
    user?.direccion_ciudad,
    user?.direccion_codigo_postal,
  ]);

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length <= 2) return cleaned;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  };

  const handleContinue = () => {
    if (!isFormValid) return;

    sessionStorage.setItem("checkout_card_number", cardNumber);
    sessionStorage.setItem("checkout_card_name", cardName);
    sessionStorage.setItem("checkout_expiry_date", expiryDate);
    sessionStorage.setItem("checkout_cvv", cvv);

    sessionStorage.setItem("checkout_shipping_street", street);
    sessionStorage.setItem("checkout_shipping_city", city);
    sessionStorage.setItem("checkout_shipping_postal_code", postalCode);

    router.push("/checkout/confirm");
  };

  const isFormValid =
    cardNumber.replace(/\s/g, "").length === 16 &&
    cardName.trim().length > 0 &&
    expiryDate.length === 5 &&
    cvv.length >= 3 &&
    street.trim().length > 0 &&
    city.trim().length > 0 &&
    postalCode.replace(/\D/g, "").length === 5;

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
          Cargando formulario de pago...
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
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-5xl">
        <section className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-foreground md:text-4xl">
            Resumen de compra
          </h1>

          <div className="mx-auto mt-5 flex max-w-md items-center justify-between">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className="flex flex-1 items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${
                    step <= 3
                      ? "bg-primary text-white"
                      : "bg-[#ead8c4] text-[#7f6a57]"
                  }`}
                >
                  {step}
                </div>
                {index < 3 && (
                  <div
                    className={`h-[3px] flex-1 ${
                      step < 3 ? "bg-primary" : "bg-[#ead8c4]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[34px] border border-[#ecd8dd] bg-gradient-to-br from-[#fff8fa] via-[#fffdfd] to-[#fdf5f7] p-8 shadow-sm dark:border-border dark:bg-card">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-semibold text-foreground">
              Pago y envío
            </h2>

            <p className="mt-3 text-center text-sm text-foreground/65">
              Completa los datos de tu tarjeta y la dirección donde deseas
              recibir tu pedido.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Datos de la tarjeta
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground/75">
                      Número de tarjeta
                    </label>
                    <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) =>
                          setCardNumber(formatCardNumber(e.target.value))
                        }
                        placeholder="1234 5678 9012 3456"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground/75">
                      Nombre en la tarjeta
                    </label>
                    <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                      <User className="h-4 w-4 text-primary" />
                      <input
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Nombre completo"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/75">
                        Fecha de expiración
                      </label>
                      <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) =>
                            setExpiryDate(formatExpiryDate(e.target.value))
                          }
                          placeholder="MM/AA"
                          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-foreground/75">
                        CVV
                      </label>
                      <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                        <KeyRound className="h-4 w-4 text-primary" />
                        <input
                          type="password"
                          value={cvv}
                          onChange={(e) =>
                            setCvv(
                              e.target.value.replace(/\D/g, "").slice(0, 4)
                            )
                          }
                          placeholder="123"
                          className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  Dirección de envío
                </h3>

                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground/75">
                      Calle y número
                    </label>
                    <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                      <Home className="h-4 w-4 text-primary" />
                      <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="Ej. Av. Principal 123"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground/75">
                      Ciudad
                    </label>
                    <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                      <Building2 className="h-4 w-4 text-primary" />
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ciudad"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground/75">
                      Código postal
                    </label>
                    <div className="flex items-center gap-3 rounded-[20px] border border-border bg-background px-4 py-3">
                      <Mailbox className="h-4 w-4 text-primary" />
                      <input
                        type="text"
                        value={postalCode}
                        onChange={(e) =>
                          setPostalCode(
                            e.target.value.replace(/\D/g, "").slice(0, 5)
                          )
                        }
                        placeholder="5 dígitos"
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                onClick={() => router.push("/checkout/method")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Método de compra
              </button>

              <button
                onClick={handleContinue}
                disabled={!isFormValid}
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
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
