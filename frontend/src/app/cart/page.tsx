"use client";

import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  useClearCartMutation,
  useGetCartQuery,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from "@/app/state/services/cartApi";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export default function CartPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  const shouldSkipCartQuery = !isAuthenticated || user?.rol === "administrador";

  const {
    data: cart,
    isLoading,
    isError,
  } = useGetCartQuery(undefined, {
    skip: shouldSkipCartQuery,
  });

  const [updateCartItem, { isLoading: isUpdating }] =
    useUpdateCartItemMutation();
  const [removeCartItem, { isLoading: isRemoving }] =
    useRemoveCartItemMutation();
  const [clearCart, { isLoading: isClearing }] = useClearCartMutation();

  const getAvailableStock = (item: any) => {
    if (item.producto?.usar_tallas) {
      return Number(item.producto_talla?.stock ?? 0);
    }
    return Number(item.producto?.stock ?? 0);
  };

  const handleIncrease = async (
    productoId: number,
    currentQuantity: number,
    stock: number,
    productoTallaId?: number | null
  ) => {
    if (currentQuantity >= stock) return;

    try {
      await updateCartItem({
        producto_id: productoId,
        cantidad: currentQuantity + 1,
        ...(productoTallaId !== undefined && productoTallaId !== null
          ? { producto_talla_id: productoTallaId }
          : {}),
      }).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo actualizar la cantidad");
    }
  };

  const handleDecrease = async (
    productoId: number,
    currentQuantity: number,
    productoTallaId?: number | null
  ) => {
    if (currentQuantity <= 1) return;

    try {
      await updateCartItem({
        producto_id: productoId,
        cantidad: currentQuantity - 1,
        ...(productoTallaId !== undefined && productoTallaId !== null
          ? { producto_talla_id: productoTallaId }
          : {}),
      }).unwrap();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo actualizar la cantidad");
    }
  };

  const handleRemove = async (
    productoId: number,
    productoTallaId?: number | null
  ) => {
    try {
      await removeCartItem({
        producto_id: productoId,
        ...(productoTallaId !== undefined && productoTallaId !== null
          ? { producto_talla_id: productoTallaId }
          : {}),
      }).unwrap();

      toast.success("Producto eliminado del carrito");
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo eliminar el producto");
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart().unwrap();
      toast.success("Carrito vaciado correctamente");
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo vaciar el carrito");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            Inicia sesión para ver tu carrito
          </h1>
          <p className="mt-3 text-foreground/70">
            Necesitas iniciar sesión para consultar los productos guardados.
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
        <div className="mx-auto max-w-4xl rounded-[32px] border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-foreground">
            El carrito no está disponible para administradores
          </h1>
        </div>
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-foreground shadow-sm">
          Cargando carrito...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-background px-4 pb-16 pt-36 md:px-8 md:pt-40">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-border bg-card p-10 text-center text-red-500 shadow-sm">
          No se pudo cargar el carrito.
        </div>
      </main>
    );
  }

  const items = cart?.items || [];
  const total = cart?.total || 0;
  const totalItems = items.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-36 text-foreground md:px-8 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <section className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Maison C&amp;O Élégance
          </p>

          <h1 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Mi carrito
          </h1>

          <p className="mt-2 text-sm text-foreground/65">
            Revisa tus productos antes de continuar con tu compra
          </p>

          {items.length > 0 && (
            <div className="mt-5">
              <button
                onClick={handleClearCart}
                disabled={isClearing}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary disabled:opacity-50"
              >
                {isClearing ? "Vaciando..." : "Vaciar carrito"}
              </button>
            </div>
          )}
        </section>

        {items.length === 0 ? (
          <div className="rounded-[32px] border border-border bg-card p-12 text-center shadow-sm">
            <ShoppingCart className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              Tu carrito está vacío
            </h2>
            <p className="mt-2 text-foreground/70">
              Agrega tus piezas favoritas para continuar con tu compra.
            </p>
            <button
              onClick={() => router.push("/products")}
              className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Ver productos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
            <section className="space-y-5">
              {items.map((item) => {
                const subtotal =
                  item.subtotal ??
                  Number(item.producto.precio) * Number(item.cantidad);

                const availableStock = getAvailableStock(item);

                return (
                  <article
                    key={item.id}
                    className="rounded-[30px] border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="relative h-32 w-full overflow-hidden rounded-[22px] border border-border bg-background sm:w-32">
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

                      <div className="flex flex-1 flex-col justify-between gap-4">
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-primary">
                              {item.producto.categoria?.nombre ||
                                "Sin categoría"}
                            </p>

                            <h3 className="mt-1 text-xl font-semibold text-foreground">
                              {item.producto.nombre}
                            </h3>

                            <p className="mt-1 text-sm text-foreground/70">
                              Material: {item.producto.material}
                            </p>

                            {item.producto.usar_tallas &&
                              item.producto_talla && (
                                <p className="mt-1 text-sm text-foreground/70">
                                  Talla: {item.producto_talla.talla}
                                </p>
                              )}

                            <p className="mt-1 text-sm text-foreground/70">
                              Stock disponible: {availableStock}
                            </p>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="text-sm text-foreground/70">
                              Precio unitario
                            </p>
                            <p className="mt-1 text-lg font-semibold text-foreground">
                              $
                              {Number(item.producto.precio).toLocaleString(
                                "es-MX",
                                {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="mb-2 text-sm font-medium text-foreground/80">
                              Cantidad
                            </p>

                            <div className="inline-flex items-center overflow-hidden rounded-full border border-border bg-background shadow-sm">
                              <button
                                onClick={() =>
                                  handleDecrease(
                                    item.producto_id,
                                    item.cantidad,
                                    item.producto_talla_id
                                  )
                                }
                                disabled={item.cantidad <= 1 || isUpdating}
                                className="flex h-11 w-11 items-center justify-center text-foreground transition hover:bg-secondary disabled:opacity-40"
                              >
                                <Minus className="h-4 w-4" />
                              </button>

                              <div className="flex h-11 min-w-[58px] items-center justify-center border-x border-border text-base font-semibold text-foreground">
                                {item.cantidad}
                              </div>

                              <button
                                onClick={() =>
                                  handleIncrease(
                                    item.producto_id,
                                    item.cantidad,
                                    availableStock,
                                    item.producto_talla_id
                                  )
                                }
                                disabled={
                                  item.cantidad >= availableStock || isUpdating
                                }
                                className="flex h-11 w-11 items-center justify-center text-foreground transition hover:bg-secondary disabled:opacity-40"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="text-left sm:text-right">
                              <p className="text-sm text-foreground/70">
                                Subtotal
                              </p>
                              <p className="mt-1 text-xl font-bold text-foreground">
                                $
                                {Number(subtotal).toLocaleString("es-MX", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </p>
                            </div>

                            <button
                              onClick={() =>
                                handleRemove(
                                  item.producto_id,
                                  item.producto_talla_id
                                )
                              }
                              disabled={isRemoving}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-primary transition hover:bg-secondary disabled:opacity-40"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="h-fit rounded-[30px] border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28">
              <h2 className="text-xl font-semibold text-foreground">
                Resumen de compra
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-foreground/70">
                  <span>Productos</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-base font-medium text-foreground/80">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-foreground">
                    $
                    {Number(total).toLocaleString("es-MX", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              <button
                onClick={() => router.push("/checkout")}
                className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Continuar compra
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
