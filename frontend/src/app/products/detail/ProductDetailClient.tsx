"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  Heart,
  Ruler,
} from "lucide-react";
import { toast } from "sonner";
import { useGetProductByIdQuery } from "@/app/state/services/productApi";
import { useAddToCartMutation } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function ProductDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = Number(searchParams.get("id"));

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const shouldSkip = Number.isNaN(productId) || productId <= 0;

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId, {
    skip: shouldSkip,
  });

  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

  const [quantity, setQuantity] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);

  const productSizes = useMemo(() => {
    return (product?.tallas ?? []).filter((item) => item.activo !== false);
  }, [product?.tallas]);

  const selectedSize = useMemo(() => {
    if (!selectedSizeId) return null;
    return productSizes.find((item) => item.id === selectedSizeId) ?? null;
  }, [productSizes, selectedSizeId]);

  const generalStock = Number(product?.stock ?? 0);
  const availableStock = product?.usar_tallas
    ? Number(selectedSize?.stock ?? 0)
    : generalStock;

  const requiresSizeSelection = !!product?.usar_tallas;
  const isSizeSelected = !requiresSizeSelection || !!selectedSize;
  const isOutOfStock = requiresSizeSelection
    ? isSizeSelected
      ? availableStock <= 0
      : false
    : availableStock <= 0;

  useEffect(() => {
    setQuantity(1);
    setSelectedSizeId(null);
  }, [product?.id]);

  useEffect(() => {
    if (!product?.usar_tallas) {
      setSelectedSizeId(null);
      return;
    }

    if (selectedSizeId) {
      const stillExists = productSizes.some(
        (item) => item.id === selectedSizeId
      );
      if (!stillExists) {
        setSelectedSizeId(null);
      }
    }
  }, [product?.usar_tallas, productSizes, selectedSizeId]);

  useEffect(() => {
    if (availableStock > 0 && quantity > availableStock) {
      setQuantity(availableStock);
    }

    if (availableStock === 0) {
      setQuantity(1);
    }
  }, [availableStock, quantity]);

  const increaseQuantity = () => {
    if (!isSizeSelected && requiresSizeSelection) {
      toast.error("Selecciona una talla primero");
      return;
    }

    if (quantity < availableStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!product) return;

    if (requiresSizeSelection && !selectedSize) {
      toast.error("Debes seleccionar una talla");
      return;
    }

    if (isOutOfStock) {
      toast.error("No hay stock disponible");
      return;
    }

    if (!isAuthenticated) {
      toast.error("Debes iniciar sesión para agregar productos al carrito");
      router.push("/login");
      return;
    }

    if (user?.rol === "administrador") {
      toast.error("Los administradores no pueden agregar productos al carrito");
      return;
    }

    try {
      const payload = product.usar_tallas
        ? ({
            producto_id: product.id,
            cantidad: quantity,
            producto_talla_id: selectedSize?.id,
          } as any)
        : ({
            producto_id: product.id,
            cantidad: quantity,
          } as any);

      await addToCart(payload).unwrap();

      toast.success(
        `${quantity} pieza${quantity > 1 ? "s" : ""} agregada${
          quantity > 1 ? "s" : ""
        } al carrito`
      );
    } catch (error: any) {
      toast.error(
        error?.data?.message || "No se pudo agregar el producto al carrito"
      );
    }
  };

  if (shouldSkip) {
    return (
      <main className="min-h-screen bg-background px-4 pb-12 pt-40 md:px-8 md:pt-44">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-border bg-card p-10 text-center text-red-500 shadow-sm">
          ID de producto inválido.
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 pb-12 pt-40 md:px-8 md:pt-44">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-border bg-card p-10 text-center text-foreground shadow-sm">
          Cargando producto...
        </div>
      </main>
    );
  }

  if (isError || !product) {
    return (
      <main className="min-h-screen bg-background px-4 pb-12 pt-40 md:px-8 md:pt-44">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-border bg-card p-10 text-center text-red-500 shadow-sm">
          No se pudo cargar el producto.
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-40 text-foreground md:px-8 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => router.back()}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver
        </button>

        <section className="overflow-hidden rounded-[40px] border border-[#ecd6dc] bg-gradient-to-br from-[#f9eef1] via-[#f8e9ed] to-[#f5dde3] shadow-[0_20px_60px_rgba(170,120,136,0.14)] dark:border-border dark:bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="rounded-[34px] bg-[#fff8fa] p-4 shadow-inner dark:bg-background">
                <div className="relative mx-auto h-[360px] w-full max-w-[560px] overflow-hidden rounded-[28px] border border-[#efd8de] bg-[#fdf7f9] shadow-sm dark:border-border dark:bg-background md:h-[560px]">
                  <Image
                    src={product.imagen_url || "/placeholder-product.png"}
                    alt={product.nombre}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2.5 text-[#d07b96] shadow-sm backdrop-blur-sm dark:bg-card/80 dark:text-primary">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="inline-flex w-fit rounded-full border border-[#efcfd8] bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d16e8f] dark:border-border dark:bg-background dark:text-primary">
                {product.categoria?.nombre || "Sin categoría"}
              </div>

              <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#8e5869] dark:text-foreground md:text-4xl">
                {product.nombre}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-[#9e7481] dark:text-foreground/70">
                {product.descripcion}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-[#f0d2da] bg-white/80 px-4 py-2 text-sm font-medium text-[#c76988] dark:border-border dark:bg-background dark:text-foreground/80">
                  Material: {product.material}
                </span>

                {product.usar_tallas ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#f0d2da] bg-white/80 px-4 py-2 text-sm font-medium text-[#c76988] dark:border-border dark:bg-background dark:text-foreground/80">
                    <Ruler className="h-4 w-4" />
                    Producto con tallas
                  </span>
                ) : (
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      generalStock > 0
                        ? "bg-[#eef9ef] text-[#43935d] dark:bg-green-950/40 dark:text-green-300"
                        : "bg-[#fff0f0] text-[#c65757] dark:bg-red-950/40 dark:text-red-300"
                    }`}
                  >
                    {generalStock > 0
                      ? `${generalStock} disponibles`
                      : "Sin existencia"}
                  </span>
                )}
              </div>

              <div className="mt-8 rounded-[30px] border border-[#efd7de] bg-white/75 p-6 shadow-sm dark:border-border dark:bg-background">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#cf7391] dark:text-primary">
                  Precio
                </p>
                <p className="mt-2 text-4xl font-bold leading-none text-[#9f6174] dark:text-foreground md:text-5xl">
                  $
                  {Number(product.precio).toLocaleString("es-MX", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

              {product.usar_tallas && (
                <div className="mt-8">
                  <p className="mb-3 text-sm font-medium text-[#9c7380] dark:text-foreground/75">
                    Selecciona una talla
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {productSizes.map((size) => {
                      const outOfStockSize = Number(size.stock ?? 0) <= 0;
                      const isSelected = selectedSizeId === size.id;

                      return (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => {
                            if (outOfStockSize) return;
                            setSelectedSizeId(size.id);
                            setQuantity(1);
                          }}
                          disabled={outOfStockSize}
                          className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                            isSelected
                              ? "border-primary bg-primary text-white"
                              : outOfStockSize
                              ? "cursor-not-allowed border-border bg-muted text-foreground/40"
                              : "border-[#efd5dc] bg-white/85 text-[#a16a7c] hover:bg-[#fff5f8] dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-secondary"
                          }`}
                        >
                          <div>{size.talla}</div>
                          <div className="mt-1 text-xs opacity-80">
                            {outOfStockSize
                              ? "Agotada"
                              : `${size.stock} disponible${
                                  size.stock > 1 ? "s" : ""
                                }`}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {!selectedSize && (
                    <p className="mt-3 text-xs text-[#b08492] dark:text-foreground/55">
                      Debes elegir una talla antes de agregar al carrito.
                    </p>
                  )}

                  {selectedSize && (
                    <p className="mt-3 text-xs text-[#b08492] dark:text-foreground/55">
                      Talla seleccionada:{" "}
                      <span className="font-semibold">
                        {selectedSize.talla}
                      </span>
                    </p>
                  )}
                </div>
              )}

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-[#9c7380] dark:text-foreground/75">
                  Cantidad
                </p>

                <div className="inline-flex items-center overflow-hidden rounded-full border border-[#efd5dc] bg-white/85 shadow-sm dark:border-border dark:bg-background">
                  <button
                    onClick={decreaseQuantity}
                    disabled={
                      quantity === 1 || (isOutOfStock && isSizeSelected)
                    }
                    className="flex h-12 w-12 items-center justify-center text-[#c56f8b] transition hover:bg-[#fbeef2] disabled:cursor-not-allowed disabled:opacity-40 dark:text-foreground dark:hover:bg-secondary"
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <div className="flex h-12 min-w-[74px] items-center justify-center border-x border-[#efd5dc] text-base font-semibold text-[#9b6174] dark:border-border dark:text-foreground">
                    {quantity}
                  </div>

                  <button
                    onClick={increaseQuantity}
                    disabled={
                      (!isSizeSelected && requiresSizeSelection) ||
                      quantity >= availableStock ||
                      (isOutOfStock && isSizeSelected)
                    }
                    className="flex h-12 w-12 items-center justify-center text-[#c56f8b] transition hover:bg-[#fbeef2] disabled:cursor-not-allowed disabled:opacity-40 dark:text-foreground dark:hover:bg-secondary"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                {requiresSizeSelection && !selectedSize ? (
                  <p className="mt-2 text-xs text-[#b08492] dark:text-foreground/55">
                    Selecciona una talla para habilitar la cantidad.
                  </p>
                ) : availableStock > 0 ? (
                  <p className="mt-2 text-xs text-[#b08492] dark:text-foreground/55">
                    Máximo permitido: {availableStock} pieza
                    {availableStock > 1 ? "s" : ""}
                  </p>
                ) : (
                  <p className="mt-2 text-xs text-red-500">
                    {requiresSizeSelection
                      ? "La talla seleccionada no tiene stock."
                      : "Este producto no tiene stock disponible."}
                  </p>
                )}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => router.push("/cart")}
                  className="flex-1 rounded-full border border-[#edd3da] bg-white/85 px-6 py-3 text-sm font-medium text-[#a16a7c] transition hover:bg-[#fff5f8] dark:border-border dark:bg-background dark:text-foreground dark:hover:bg-secondary"
                >
                  Ir al carrito
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={
                    isAddingToCart ||
                    (requiresSizeSelection && !selectedSize) ||
                    (isOutOfStock && isSizeSelected)
                  }
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f06c96] to-[#ee4d7c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ShoppingCart className="h-4 w-4" />
                  {requiresSizeSelection && !selectedSize
                    ? "Selecciona una talla"
                    : isOutOfStock && isSizeSelected
                    ? "Producto agotado"
                    : isAddingToCart
                    ? "Agregando..."
                    : `Agregar ${quantity}`}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
