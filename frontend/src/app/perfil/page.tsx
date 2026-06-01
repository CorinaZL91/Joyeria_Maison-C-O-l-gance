"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/redux";
import { UserCircle2, Mail, Phone, Package } from "lucide-react";

export default function PerfilPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    if (user?.rol !== "cliente") {
      router.replace("/");
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || user?.rol !== "cliente") {
    return null;
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
      <div className="mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-[34px] border border-border bg-card shadow-sm">
          <div className="bg-gradient-to-br from-[#dca3ad] via-[#d79aa5] to-[#c98d98] px-6 py-10 text-center md:px-8 md:py-12">
            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <UserCircle2
                  className="h-16 w-16 text-white"
                  strokeWidth={1.4}
                />
              </div>
            </div>

            <h1 className="mt-4 text-3xl font-light text-white">Mi perfil</h1>
            <p className="mt-2 text-sm text-white/90">
              Consulta la información de tu cuenta
            </p>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
            <div className="rounded-[24px] border border-border bg-background p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <UserCircle2 className="h-5 w-5 text-primary" />
                <p className="text-sm text-foreground/60">Nombre</p>
              </div>
              <p className="text-base font-medium text-foreground">
                {user.nombre}
              </p>
            </div>

            <div className="rounded-[24px] border border-border bg-background p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-sm text-foreground/60">Correo</p>
              </div>
              <p className="break-all text-base font-medium text-foreground">
                {user.correo}
              </p>
            </div>

            <div className="rounded-[24px] border border-border bg-background p-5 shadow-sm md:col-span-2">
              <div className="mb-3 flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-sm text-foreground/60">Teléfono</p>
              </div>
              <p className="text-base font-medium text-foreground">
                {user.telefono || "No registrado"}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border px-6 py-6 md:flex-row md:justify-center md:px-8">
            <button
              onClick={() => router.push("/orders")}
              className="flex items-center justify-center gap-2 rounded-full bg-[#c8a06c] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <Package className="h-4 w-4" />
              Mis pedidos
            </button>

            <button
              onClick={() => router.push("/")}
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Seguir comprando
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
