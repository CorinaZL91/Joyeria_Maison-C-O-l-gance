import { Suspense } from "react";
import OrderDetailClient from "./OrderDetailClient";

export default function OrderDetailPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
          <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-foreground shadow-sm">
            Cargando detalle del pedido...
          </div>
        </main>
      }
    >
      <OrderDetailClient />
    </Suspense>
  );
}
