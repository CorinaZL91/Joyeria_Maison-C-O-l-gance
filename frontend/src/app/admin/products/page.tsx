"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Gem,
  Pencil,
  Plus,
  Search,
  Trash2,
  X,
  PackageSearch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@/app/models/Product";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAdminProductsQuery,
  useUpdateProductMutation,
} from "@/app/state/services/productApi";
import { useGetCategoriesQuery } from "@/app/state/services/categoryApi";
import {
  createProductSchema,
  type CreateProductFormValues,
  type CreateProductSubmitValues,
} from "@/app/libs/validations/productSchemas";

const ITEMS_PER_PAGE = 6;

type ProductSizeFormItem = {
  talla: string;
  stock: number;
  activo: boolean;
};

const initialSizes: ProductSizeFormItem[] = [
  { talla: "", stock: 0, activo: true },
];

const initialFormValues: CreateProductFormValues = {
  nombre: "",
  descripcion: "",
  precio: 0,
  material: "",
  usar_tallas: false,
  stock: 0,
  stock_minimo: 0,
  categoria_id: 0,
  activo: true,
  imagen: null,
  tallas: [],
};

type ConfirmModalState = {
  open: boolean;
  product: Product | null;
};

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "todos" | "activos" | "inactivos"
  >("todos");
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [sizeRows, setSizeRows] = useState<ProductSizeFormItem[]>(initialSizes);

  const [confirmModal, setConfirmModal] = useState<ConfirmModalState>({
    open: false,
    product: null,
  });

  const queryParams =
    statusFilter === "activos"
      ? { activo: true }
      : statusFilter === "inactivos"
      ? { activo: false }
      : {};

  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetAdminProductsQuery(queryParams);

  const { data: categories = [] } = useGetCategoriesQuery();

  const [createProduct, { isLoading: isCreating }] = useCreateProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const isSubmitting = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateProductFormValues, any, CreateProductSubmitValues>({
    resolver: zodResolver(createProductSchema),
    defaultValues: initialFormValues,
  });

  const formValues = watch();
  const usesSizes = !!formValues.usar_tallas;

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const categoryName = product.categoria?.nombre?.toLowerCase() || "";

      return (
        !term ||
        product.nombre.toLowerCase().includes(term) ||
        product.descripcion.toLowerCase().includes(term) ||
        (product.material || "").toLowerCase().includes(term) ||
        categoryName.includes(term)
      );
    });
  }, [products, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  useEffect(() => {
    const totalPages = Math.max(
      1,
      Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    );

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts.length, currentPage]);

  useEffect(() => {
    if (!usesSizes) {
      setSizeRows(initialSizes);
      setValue("tallas", []);
    }
  }, [usesSizes, setValue]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  );

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const syncSizesToForm = (rows: ProductSizeFormItem[]) => {
    setSizeRows(rows);

    setValue(
      "tallas",
      rows
        .map((row) => ({
          talla: row.talla.trim(),
          stock: Number(row.stock || 0),
          activo: row.activo,
        }))
        .filter((row) => row.talla.length > 0),
      { shouldValidate: true }
    );
  };

  const addSizeRow = () => {
    syncSizesToForm([...sizeRows, { talla: "", stock: 0, activo: true }]);
  };

  const updateSizeRow = (
    index: number,
    key: keyof ProductSizeFormItem,
    value: string | number | boolean
  ) => {
    const nextRows = [...sizeRows];
    nextRows[index] = {
      ...nextRows[index],
      [key]: value,
    };
    syncSizesToForm(nextRows);
  };

  const removeSizeRow = (index: number) => {
    const nextRows = sizeRows.filter((_, rowIndex) => rowIndex !== index);
    syncSizesToForm(
      nextRows.length > 0 ? nextRows : [{ talla: "", stock: 0, activo: true }]
    );
  };

  const openCreateModal = () => {
    setEditingProduct(null);
    reset(initialFormValues);
    setSizeRows(initialSizes);
    setIsModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);

    const productSizesArray = product.tallas ?? [];

    const productSizes =
      productSizesArray.length > 0
        ? productSizesArray.map((item) => ({
            talla: item.talla ?? "",
            stock: Number(item.stock ?? 0),
            activo: item.activo ?? true,
          }))
        : initialSizes;

    setSizeRows(product.usar_tallas ? productSizes : initialSizes);

    reset({
      nombre: product.nombre ?? "",
      descripcion: product.descripcion ?? "",
      precio: Number(product.precio ?? 0),
      material: product.material ?? "",
      usar_tallas: Boolean(product.usar_tallas),
      stock: Number(product.stock ?? 0),
      stock_minimo: Number(product.stock_minimo ?? 0),
      categoria_id: Number(product.categoria_id ?? 0),
      activo: product.activo ?? true,
      imagen: null,
      tallas: product.usar_tallas
        ? productSizesArray.map((item) => ({
            talla: item.talla ?? "",
            stock: Number(item.stock ?? 0),
            activo: item.activo ?? true,
          }))
        : [],
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsModalOpen(false);
    setEditingProduct(null);
    setSizeRows(initialSizes);
    reset(initialFormValues);
  };

  const openConfirmModal = (product: Product) => {
    setConfirmModal({
      open: true,
      product,
    });
  };

  const closeConfirmModal = () => {
    if (isDeleting) return;
    setConfirmModal({
      open: false,
      product: null,
    });
  };

  const onSubmit = async (values: CreateProductSubmitValues) => {
    try {
      const cleanedSizes = values.usar_tallas
        ? sizeRows
            .map((row) => ({
              talla: row.talla.trim(),
              stock: Number(row.stock || 0),
              activo: row.activo,
            }))
            .filter((row) => row.talla.length > 0)
        : [];

      if (values.usar_tallas && cleanedSizes.length === 0) {
        toast.error("Debes agregar al menos una talla");
        return;
      }

      const normalizedSizes = cleanedSizes.map((row) =>
        row.talla.trim().toLowerCase()
      );
      const hasDuplicateSizes = normalizedSizes.some(
        (size, index) => normalizedSizes.indexOf(size) !== index
      );

      if (hasDuplicateSizes) {
        toast.error("No puedes repetir tallas en el mismo producto");
        return;
      }

      const payload = {
        nombre: values.nombre.trim(),
        descripcion: values.descripcion.trim(),
        precio: values.precio,
        material: values.material.trim(),
        usar_tallas: values.usar_tallas,
        stock: values.usar_tallas ? undefined : values.stock,
        stock_minimo: values.stock_minimo,
        categoria_id: values.categoria_id,
        activo: values.activo,
        imagen: values.imagen ?? null,
        tallas: values.usar_tallas ? cleanedSizes : [],
      };

      if (editingProduct) {
        await updateProduct({
          id: editingProduct.id,
          ...payload,
        }).unwrap();

        toast.success("Producto actualizado correctamente");
      } else {
        await createProduct(payload).unwrap();
        toast.success("Producto creado correctamente");
      }

      closeModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo guardar el producto");
    }
  };

  const handleDeleteConfirmed = async () => {
    if (!confirmModal.product) return;

    try {
      await deleteProduct(confirmModal.product.id).unwrap();
      toast.success("Producto eliminado correctamente");
      closeConfirmModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo eliminar el producto");
    }
  };

  const handleToggleActive = async (product: Product) => {
    try {
      await updateProduct({
        id: product.id,
        activo: !product.activo,
      }).unwrap();

      toast.success(
        product.activo
          ? "Producto desactivado correctamente"
          : "Producto activado correctamente"
      );
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo actualizar el estado");
    }
  };

  const totalStockFromSizes = sizeRows.reduce(
    (acc, row) => acc + Number(row.stock || 0),
    0
  );

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[34px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#be7a8f] dark:border-border dark:bg-background/70 dark:text-primary">
                <Gem className="h-3.5 w-3.5" />
                Administración
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-[#9a6274] dark:text-foreground md:text-4xl">
                Gestión de productos
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9b7883] dark:text-foreground/70">
                Administra el catálogo de Maison C&amp;O Élégance: crea, edita,
                activa o desactiva productos, controla stock y organiza tus
                piezas por categoría.
              </p>
            </div>

            <button
              onClick={openCreateModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              Nuevo producto
            </button>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Catálogo actual
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                {filteredProducts.length} producto(s) encontrado(s)
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 md:flex-row lg:max-w-2xl">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
                <input
                  type="text"
                  placeholder="Buscar por nombre, material o categoría"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value as "todos" | "activos" | "inactivos"
                  )
                }
                className="rounded-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              >
                <option value="todos">Todos</option>
                <option value="activos">Solo activos</option>
                <option value="inactivos">Solo inactivos</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-foreground/60">
                Cargando productos...
              </div>
            )}

            {isError && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-red-500">
                No se pudieron cargar los productos.
              </div>
            )}

            {!isLoading && !isError && filteredProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-background px-6 py-16 text-center">
                <PackageSearch className="h-10 w-10 text-foreground/35" />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  No hay productos para mostrar
                </h3>
                <p className="mt-2 max-w-md text-sm text-foreground/60">
                  Aún no se encontraron productos con ese criterio de búsqueda o
                  todavía no has agregado ninguno.
                </p>
              </div>
            )}

            {!isLoading && !isError && filteredProducts.length > 0 && (
              <>
                <div className="mt-2 overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Producto
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Categoría
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Precio
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Stock
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Estado
                        </th>
                        <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                          Acciones
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginatedProducts.map((product) => {
                        const stock = Number(product.stock ?? 0);
                        const stockMinimo = Number(product.stock_minimo ?? 0);
                        const productSizes = product.tallas ?? [];

                        const totalStockBySizes = productSizes.reduce(
                          (acc, item) => acc + Number(item.stock ?? 0),
                          0
                        );

                        const visibleStock = product.usar_tallas
                          ? totalStockBySizes
                          : stock;

                        const isOutOfStock = visibleStock === 0;
                        const lowStock =
                          visibleStock > 0 && visibleStock <= stockMinimo;

                        return (
                          <tr
                            key={product.id}
                            className="rounded-[22px] bg-background shadow-sm"
                          >
                            <td className="rounded-l-[22px] px-4 py-4 align-middle">
                              <div className="flex min-w-[260px] items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-[#f7f0f2] dark:bg-secondary">
                                  <Image
                                    src={
                                      product.imagen_url ||
                                      "/placeholder-product.png"
                                    }
                                    alt={product.nombre}
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                                <div>
                                  <p className="font-medium text-foreground">
                                    {product.nombre}
                                  </p>
                                  <p className="mt-1 line-clamp-2 max-w-[260px] text-sm text-foreground/60">
                                    {product.descripcion}
                                  </p>

                                  <div className="mt-1 flex flex-wrap items-center gap-2">
                                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">
                                      {product.material || "Sin material"}
                                    </p>

                                    {product.usar_tallas && (
                                      <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                                        Con tallas
                                      </span>
                                    )}
                                  </div>

                                  {product.usar_tallas &&
                                    productSizes.length > 0 && (
                                      <div className="mt-2 flex flex-wrap gap-2">
                                        {productSizes.map((item, index) => (
                                          <span
                                            key={`${item.talla}-${index}`}
                                            className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-foreground/70"
                                          >
                                            {item.talla}: {item.stock}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                </div>
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm text-foreground/75">
                              {product.categoria?.nombre || "Sin categoría"}
                            </td>

                            <td className="px-4 py-4 text-sm font-medium text-foreground">
                              $
                              {Number(product.precio).toLocaleString("es-MX", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>

                            <td className="px-4 py-4 text-sm text-foreground/75">
                              <div className="flex flex-col gap-1">
                                <span
                                  className={
                                    isOutOfStock
                                      ? "font-medium text-red-500"
                                      : "text-foreground/75"
                                  }
                                >
                                  {isOutOfStock
                                    ? "Agotado"
                                    : product.usar_tallas
                                    ? `${visibleStock} piezas en tallas`
                                    : `${visibleStock} unidades`}
                                </span>

                                {product.usar_tallas && (
                                  <span className="text-xs text-foreground/50">
                                    {productSizes.length} talla(s)
                                  </span>
                                )}

                                {lowStock && (
                                  <span className="text-xs text-amber-500">
                                    Stock bajo
                                  </span>
                                )}

                                <span
                                  className={`text-xs ${
                                    isOutOfStock
                                      ? "text-red-500"
                                      : lowStock
                                      ? "text-amber-500"
                                      : "text-foreground/50"
                                  }`}
                                >
                                  Mínimo: {stockMinimo}
                                </span>
                              </div>
                            </td>

                            <td className="px-4 py-4">
                              <div className="flex items-center gap-3">
                                <span
                                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                    product.activo
                                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                                      : "bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-white/70"
                                  }`}
                                >
                                  {product.activo ? "Activo" : "Inactivo"}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => handleToggleActive(product)}
                                  className={`relative h-7 w-12 rounded-full transition ${
                                    product.activo
                                      ? "bg-emerald-500"
                                      : "bg-gray-300 dark:bg-white/20"
                                  }`}
                                  title={
                                    product.activo
                                      ? "Desactivar producto"
                                      : "Activar producto"
                                  }
                                >
                                  <span
                                    className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                                      product.activo ? "left-6" : "left-1"
                                    }`}
                                  />
                                </button>
                              </div>
                            </td>

                            <td className="rounded-r-[22px] px-4 py-4">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => openEditModal(product)}
                                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
                                >
                                  <Pencil className="h-4 w-4" />
                                  Editar
                                </button>

                                <button
                                  onClick={() => openConfirmModal(product)}
                                  disabled={isDeleting}
                                  className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600 transition hover:bg-red-100 disabled:opacity-50 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  Eliminar
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-foreground/60">
                    Página {currentPage} de {totalPages}
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-secondary disabled:opacity-50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </button>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-secondary disabled:opacity-50"
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-3xl overflow-hidden rounded-[30px] border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {editingProduct ? "Editar producto" : "Nuevo producto"}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Completa la información del producto.
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-full border border-border p-2 text-foreground/70 transition hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-h-[80vh] overflow-y-auto px-6 py-6"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    type="text"
                    {...register("nombre")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.nombre
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Descripción
                  </label>
                  <textarea
                    rows={4}
                    {...register("descripcion")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.descripcion
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.descripcion && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.descripcion.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Precio
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    {...register("precio")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.precio
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.precio && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.precio.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Material
                  </label>
                  <input
                    type="text"
                    {...register("material")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.material
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.material && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.material.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 rounded-[24px] border border-border bg-background/60 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground">
                        ¿Este producto usa tallas?
                      </label>
                      <p className="mt-1 text-xs text-foreground/60">
                        Actívalo si quieres registrar tallas con stock
                        independiente.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setValue("usar_tallas", !usesSizes)}
                      className={`relative flex h-8 w-14 items-center rounded-full transition ${
                        usesSizes
                          ? "bg-primary"
                          : "bg-gray-300 dark:bg-white/20"
                      }`}
                    >
                      <span
                        className={`absolute h-6 w-6 rounded-full bg-white transition ${
                          usesSizes ? "left-7" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {!usesSizes && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Stock
                    </label>
                    <input
                      type="number"
                      min="0"
                      {...register("stock")}
                      className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                        errors.stock
                          ? "border-red-400"
                          : "border-border focus:border-primary"
                      }`}
                    />
                    {errors.stock && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.stock.message}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Stock mínimo
                  </label>
                  <input
                    type="number"
                    min="0"
                    {...register("stock_minimo")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.stock_minimo
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.stock_minimo && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.stock_minimo.message}
                    </p>
                  )}
                </div>

                {usesSizes && (
                  <div className="md:col-span-2 rounded-[24px] border border-border bg-background/60 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          Tallas y stock por talla
                        </h4>
                        <p className="mt-1 text-xs text-foreground/60">
                          Agrega las tallas disponibles y su existencia.
                        </p>
                        <p className="mt-2 text-sm text-foreground/60">
                          Stock total calculado: {totalStockFromSizes}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={addSizeRow}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
                      >
                        <Plus className="h-4 w-4" />
                        Agregar talla
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {sizeRows.map((row, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-1 gap-3 rounded-2xl border border-border bg-card p-3 md:grid-cols-[1fr_160px_auto]"
                        >
                          <div>
                            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-foreground/55">
                              Talla
                            </label>
                            <input
                              type="text"
                              value={row.talla}
                              onChange={(e) =>
                                updateSizeRow(index, "talla", e.target.value)
                              }
                              placeholder="Ej. 6, 7, M, 40mm, Ajustable"
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-foreground/55">
                              Stock
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={row.stock}
                              onChange={(e) =>
                                updateSizeRow(
                                  index,
                                  "stock",
                                  Number(e.target.value || 0)
                                )
                              }
                              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                            />
                          </div>

                          <div className="flex items-end">
                            <button
                              type="button"
                              onClick={() => removeSizeRow(index)}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 transition hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                              Quitar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {errors.tallas && (
                      <p className="mt-3 text-xs text-red-500">
                        {String(errors.tallas.message ?? "Revisa las tallas")}
                      </p>
                    )}
                  </div>
                )}

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Categoría
                  </label>
                  <select
                    {...register("categoria_id")}
                    className={`w-full rounded-2xl border bg-background px-4 py-3 text-sm outline-none ${
                      errors.categoria_id
                        ? "border-red-400"
                        : "border-border focus:border-primary"
                    }`}
                  >
                    <option value={0}>Selecciona una categoría</option>
                    {categories
                      .filter((category) => category.activa !== false)
                      .map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.nombre}
                        </option>
                      ))}
                  </select>
                  {errors.categoria_id && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.categoria_id.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Estado del producto
                  </label>

                  <button
                    type="button"
                    onClick={() => setValue("activo", !formValues.activo)}
                    className={`relative flex h-8 w-14 items-center rounded-full transition ${
                      formValues.activo
                        ? "bg-emerald-500"
                        : "bg-gray-300 dark:bg-white/20"
                    }`}
                  >
                    <span
                      className={`absolute h-6 w-6 rounded-full bg-white transition ${
                        formValues.activo ? "left-7" : "left-1"
                      }`}
                    />
                  </button>

                  <p className="mt-2 text-sm text-foreground/60">
                    {formValues.activo
                      ? "Activo y visible en catálogo"
                      : "Inactivo y oculto para clientes"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Imagen
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setValue("imagen", e.target.files?.[0] || null)
                    }
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:text-white"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {isSubmitting
                    ? editingProduct
                      ? "Guardando cambios..."
                      : "Creando producto..."
                    : editingProduct
                    ? "Guardar cambios"
                    : "Crear producto"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirmModal.open && confirmModal.product && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-red-100 bg-white shadow-2xl dark:border-red-500/20 dark:bg-card">
            <div className="relative px-6 pb-4 pt-6 text-center">
              <button
                type="button"
                onClick={closeConfirmModal}
                className="absolute right-4 top-4 rounded-full border border-border p-2 text-foreground/70 transition hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/15">
                <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-300" />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-foreground">
                Confirmar eliminación
              </h3>

              <p className="mt-3 text-sm leading-6 text-foreground/65">
                ¿Estás segura de que deseas eliminar el producto{" "}
                <span className="font-semibold text-foreground">
                  “{confirmModal.product.nombre}”
                </span>
                ?
              </p>

              <p className="mt-2 text-xs leading-5 text-foreground/50">
                Esta acción eliminará el producto del catálogo.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-[#fff8f8] px-6 py-5 dark:bg-background/40 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeConfirmModal}
                disabled={isDeleting}
                className="rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition hover:bg-secondary disabled:opacity-50"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleDeleteConfirmed}
                disabled={isDeleting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
              >
                <Trash2 className="h-4 w-4" />
                {isDeleting ? "Eliminando..." : "Sí, eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
