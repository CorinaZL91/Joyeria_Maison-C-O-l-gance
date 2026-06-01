import { Suspense } from "react";
import CategoryProductsClient from "./CategoryProductsClient";

export default function CategoryProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-border bg-card py-16 text-center text-foreground/60">
            Cargando productos...
          </div>
        </main>
      }
    >
      <CategoryProductsClient />
    </Suspense>
  );
}
