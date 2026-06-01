"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, ArrowRight, Sparkles, Eye } from "lucide-react";
import { toast } from "sonner";
import { useGetProductsQuery } from "@/app/state/services/productApi";
import { useAddToCartMutation } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsQuery(undefined);
  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();
  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => product.activo);
  }, [products]);

  const featuredProducts = useMemo(() => {
    return visibleProducts.slice(0, 4);
  }, [visibleProducts]);

  const handleAddToCart = async (productId: number) => {
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
      setActiveProductId(productId);

      await addToCart({
        producto_id: productId,
        cantidad: 1,
      }).unwrap();

      toast.success("Producto agregado al carrito correctamente");
    } catch (error: any) {
      toast.error(
        error?.data?.message || "No se pudo agregar el producto al carrito"
      );
    } finally {
      setActiveProductId(null);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section>
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[560px] w-full md:h-[700px]">
            <Image
              src="/hero-jewelry.jpg"
              alt="Nueva colección Maison C&O Élégance"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-10">
              <h1 className="mt-7 max-w-5xl text-4xl font-light leading-[1.05] text-white md:text-7xl">
                Descubre Nuestra
                <span className="mt-2 block bg-gradient-to-r from-[#ffe2ea] via-[#ffc8d8] to-[#fff0f5] bg-clip-text font-semibold tracking-[0.04em] text-transparent drop-shadow-[0_0_20px_rgba(255,206,222,0.55)]">
                  Nueva Colección
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/85 md:text-lg">
                Piezas delicadas y sofisticadas diseñadas para iluminar cada
                momento con un toque de lujo atemporal.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    const element = document.getElementById("best-sellers");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-[#7d5560] transition hover:scale-[1.02] hover:bg-white/90"
                >
                  Explorar colección
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => router.push("/#products")}
                  className="rounded-full border border-white/45 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Ver best sellers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="best-sellers" className="px-4 py-12 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-[#e8cfd5] bg-gradient-to-br from-[#f5e1e5] via-[#f2d9de] to-[#ead0d6] px-6 py-8 shadow-sm dark:border-border dark:bg-card">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#9c6f7a] backdrop-blur-sm dark:border-border dark:bg-background/60 dark:text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Favoritos de la colección
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[0.02em] text-foreground md:text-4xl">
              Best Sellers
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70 md:text-base">
              Descubre las piezas más queridas por nuestras clientas: diseños
              elegantes, versátiles y perfectos para elevar cualquier look.
            </p>
          </div>

          {isLoading && (
            <div className="mt-8 rounded-[28px] border border-border bg-card py-16 text-center text-foreground/60">
              Cargando productos...
            </div>
          )}

          {isError && (
            <div className="mt-8 rounded-[28px] border border-border bg-card py-16 text-center text-red-500">
              No se pudieron cargar los productos.
            </div>
          )}

          {!isLoading && !isError && featuredProducts.length === 0 && (
            <div className="mt-8 rounded-[28px] border border-border bg-card py-16 text-center text-foreground/60">
              No hay productos disponibles por el momento.
            </div>
          )}

          {!isLoading && !isError && featuredProducts.length > 0 && (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {featuredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-[26px] border border-white/60 bg-background/95 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-background"
                >
                  <button
                    onClick={() =>
                      router.push(`/products/detail?id=${product.id}`)
                    }
                    className="block w-full text-left"
                  >
                    <div className="relative h-[230px] w-full overflow-hidden bg-[#f8eff1] dark:bg-background">
                      <Image
                        src={product.imagen_url || "/placeholder-product.png"}
                        alt={product.nombre}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-foreground/70 backdrop-blur-sm dark:bg-card/90">
                        Best Seller
                      </div>
                    </div>
                  </button>

                  <div className="space-y-4 p-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-foreground/45">
                        {product.categoria?.nombre || "Sin categoría"}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {product.nombre}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-foreground/65">
                        {product.descripcion}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#f3e4e8] px-3 py-1.5 text-xs font-medium text-[#9c6f7a] dark:bg-secondary dark:text-primary">
                        {product.material}
                      </span>

                      <p className="text-xl font-semibold text-foreground">
                        $
                        {Number(product.precio).toLocaleString("es-MX", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          router.push(`/products/detail?id=${product.id}`)
                        }
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                      >
                        <Eye className="h-4 w-4" />
                        Ver detalles
                      </button>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        disabled={
                          isAddingToCart && activeProductId === product.id
                        }
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {isAddingToCart && activeProductId === product.id
                          ? "Agregando..."
                          : "Agregar"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => router.push("/products")}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-6 py-3 text-sm font-medium text-[#8c616c] backdrop-blur-sm transition hover:bg-white/75 dark:border-border dark:bg-background/70 dark:text-foreground"
            >
              Ver toda la colección
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
