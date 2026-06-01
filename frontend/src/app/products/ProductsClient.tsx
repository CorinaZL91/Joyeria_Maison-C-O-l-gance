"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ShoppingCart, Sparkles, Ruler } from "lucide-react";
import { toast } from "sonner";
import { useGetProductsQuery } from "@/app/state/services/productApi";
import { useAddToCartMutation } from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function ProductsClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search")?.toLowerCase().trim() || "";

  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsQuery(undefined);

  const [addToCart, { isLoading: isAddingToCart }] = useAddToCartMutation();

  const [sortBy, setSortBy] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const stock = Number(product.stock ?? 0);
      return product.activo && !Number.isNaN(stock) && stock > 0;
    });
  }, [products]);

  const availableMaterials = useMemo(() => {
    return Array.from(
      new Set(
        visibleProducts
          .map((product) => product.material?.trim())
          .filter((material): material is string => Boolean(material))
      )
    ).sort((a, b) => a.localeCompare(b));
  }, [visibleProducts]);

  const filteredProducts = useMemo(() => {
    const filtered = visibleProducts.filter((product) => {
      const price = Number(product.precio);

      const matchesMin = minPrice ? price >= Number(minPrice) : true;
      const matchesMax = maxPrice ? price <= Number(maxPrice) : true;

      const matchesMaterial =
        selectedMaterial === "all"
          ? true
          : product.material?.toLowerCase() === selectedMaterial.toLowerCase();

      const matchesSearch = search
        ? product.nombre.toLowerCase().includes(search) ||
          product.descripcion.toLowerCase().includes(search) ||
          product.material?.toLowerCase().includes(search) ||
          product.categoria?.nombre?.toLowerCase().includes(search)
        : true;

      return matchesMin && matchesMax && matchesMaterial && matchesSearch;
    });

    if (sortBy === "price-asc") {
      return [...filtered].sort((a, b) => Number(a.precio) - Number(b.precio));
    }

    if (sortBy === "price-desc") {
      return [...filtered].sort((a, b) => Number(b.precio) - Number(a.precio));
    }

    if (sortBy === "name-asc") {
      return [...filtered].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return filtered;
  }, [visibleProducts, minPrice, maxPrice, sortBy, selectedMaterial, search]);

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

  const handleProductAction = async (
    product: (typeof filteredProducts)[number]
  ) => {
    if (product.usar_tallas) {
      toast.error("Este producto requiere que selecciones una talla");
      router.push(`/products/detail?id=${product.id}`);
      return;
    }

    await handleAddToCart(product.id);
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[36px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-14 text-center shadow-sm dark:border-border dark:bg-card md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-[#be7a8f] backdrop-blur-sm dark:border-border dark:bg-background/70 dark:text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Maison C&amp;O Élégance
            </div>

            <h1 className="mt-6 text-4xl font-light leading-tight text-[#9a6274] dark:text-foreground md:text-6xl">
              Nuestra
              <span className="block bg-gradient-to-r from-[#f08aa6] via-[#e46f95] to-[#f5b0c3] bg-clip-text font-semibold tracking-[0.03em] text-transparent">
                Última Colección
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#9b7883] dark:text-foreground/70 md:text-base">
              Explora piezas delicadas, femeninas y elegantes pensadas para
              realzar tu estilo con un toque sofisticado y encantador.
            </p>

            {search && (
              <p className="mt-3 text-sm text-foreground/70">
                Resultados para:{" "}
                <span className="font-semibold text-primary">“{search}”</span>
              </p>
            )}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">
              Colección destacada
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-foreground">
              Nuestros productos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-foreground/65">
              Descubre una selección de piezas únicas con acabados elegantes y
              detalles pensados para cada ocasión.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
            <aside className="h-fit w-full overflow-hidden rounded-[30px] border border-[#dfbcc5] bg-[#f6e1e6] p-6 shadow-sm lg:sticky lg:top-28 dark:border-border dark:bg-card">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#b56f84] dark:text-primary">
                    Ordenar por
                  </h3>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="mt-4 w-full rounded-full border border-[#d9aeb9] bg-white/80 px-4 py-3 text-sm text-foreground outline-none dark:border-border dark:bg-background"
                  >
                    <option value="default">Selecciona una opción</option>
                    <option value="price-asc">Precio: menor a mayor</option>
                    <option value="price-desc">Precio: mayor a menor</option>
                    <option value="name-asc">Nombre: A-Z</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#b56f84] dark:text-primary">
                    Precio
                  </h3>

                  <div className="mt-4 flex flex-col gap-3 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                    <input
                      type="number"
                      placeholder="Mín"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className="w-full rounded-full border border-[#d9aeb9] bg-[#e8b8c3] px-4 py-2.5 text-sm text-white placeholder:text-white/80 outline-none dark:border-border dark:bg-background dark:text-foreground dark:placeholder:text-foreground/50"
                    />

                    <span className="hidden text-center text-sm text-[#b56f84] dark:text-primary sm:block">
                      a
                    </span>

                    <input
                      type="number"
                      placeholder="Máx"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full rounded-full border border-[#d9aeb9] bg-[#e8b8c3] px-4 py-2.5 text-sm text-white placeholder:text-white/80 outline-none dark:border-border dark:bg-background dark:text-foreground dark:placeholder:text-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#b56f84] dark:text-primary">
                    Material
                  </h3>

                  <select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    className="mt-4 w-full rounded-full border border-[#d9aeb9] bg-white/80 px-4 py-3 text-sm text-foreground outline-none dark:border-border dark:bg-background"
                  >
                    <option value="all">Todos los materiales</option>
                    {availableMaterials.map((material) => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </aside>

            <div>
              {isLoading && (
                <div className="rounded-[28px] border border-border bg-card py-16 text-center text-foreground/60">
                  Cargando productos...
                </div>
              )}

              {isError && (
                <div className="rounded-[28px] border border-border bg-card py-16 text-center text-red-500">
                  No se pudieron cargar los productos.
                </div>
              )}

              {!isLoading && !isError && filteredProducts.length === 0 && (
                <div className="rounded-[28px] border border-border bg-card py-16 text-center text-foreground/60">
                  {search
                    ? "No se encontraron productos para tu búsqueda."
                    : "No hay productos que coincidan con los filtros seleccionados."}
                </div>
              )}

              {!isLoading && !isError && filteredProducts.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => {
                    const hasSizes = !!product.usar_tallas;
                    const productSizes = product.tallas ?? [];

                    return (
                      <article
                        key={product.id}
                        className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative h-[320px] w-full overflow-hidden bg-[#f7f0f2] dark:bg-background">
                          <Image
                            src={
                              product.imagen_url || "/placeholder-product.png"
                            }
                            alt={product.nombre}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />

                          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-foreground/70 backdrop-blur-sm dark:bg-card/90">
                            {product.categoria?.nombre || "Sin categoría"}
                          </div>

                          {hasSizes && (
                            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white shadow-sm">
                              <Ruler className="h-3.5 w-3.5" />
                              Con tallas
                            </div>
                          )}
                        </div>

                        <div className="flex flex-1 flex-col space-y-4 p-6">
                          <div>
                            <h3 className="text-xl font-medium text-foreground">
                              {product.nombre}
                            </h3>

                            <p className="mt-2 line-clamp-2 min-h-[48px] text-sm leading-6 text-foreground/65">
                              {product.descripcion}
                            </p>

                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/65">
                                {product.material || "Sin material"}
                              </span>

                              {hasSizes && (
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-primary">
                                  {productSizes.length} talla(s)
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="pt-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-foreground/45">
                              Precio
                            </p>
                            <p className="mt-1 break-words text-2xl font-semibold leading-tight text-foreground">
                              $
                              {Number(product.precio).toLocaleString("es-MX", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </p>
                          </div>

                          <div className="mt-auto flex items-center gap-3 pt-2">
                            <button
                              onClick={() =>
                                router.push(`/products/detail?id=${product.id}`)
                              }
                              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                            >
                              Ver detalles
                            </button>

                            <button
                              onClick={() => handleProductAction(product)}
                              disabled={
                                isAddingToCart && activeProductId === product.id
                              }
                              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                            >
                              <ShoppingCart className="h-4 w-4" />
                              {hasSizes
                                ? "Elegir talla"
                                : isAddingToCart &&
                                  activeProductId === product.id
                                ? "Agregando..."
                                : "Agregar"}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
