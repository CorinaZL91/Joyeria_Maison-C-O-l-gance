import { Suspense } from "react";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div>Cargando producto...</div>}>
      <ProductDetailClient />
    </Suspense>
  );
}
