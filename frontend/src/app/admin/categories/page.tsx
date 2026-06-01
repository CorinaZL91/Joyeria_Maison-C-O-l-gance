"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  FolderTree,
  Pencil,
  Plus,
  Search,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Category } from "@/app/models/Category";
import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "@/app/state/services/categoryApi";

import {
  categorySchema,
  type CategoryFormValues,
  type CategorySubmitValues,
} from "@/app/libs/validations/categorySchemas";

const initialFormValues: CategoryFormValues = {
  nombre: "",
  descripcion: "",
};

type ConfirmDeleteModalState = {
  open: boolean;
  category: Category | null;
};

export default function AdminCategoriesPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const [confirmDeleteModal, setConfirmDeleteModal] =
    useState<ConfirmDeleteModalState>({
      open: false,
      category: null,
    });

  const { data: categories = [], isLoading, isError } = useGetCategoriesQuery();

  const [createCategory, { isLoading: isCreating }] =
    useCreateCategoryMutation();
  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation();
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();

  const isSubmitting = isCreating || isUpdating;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormValues, any, CategorySubmitValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: initialFormValues,
  });

  const filteredCategories = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return categories;

    return categories.filter((category) => {
      const nombre = category.nombre?.toLowerCase() || "";
      const descripcion = category.descripcion?.toLowerCase() || "";

      return nombre.includes(term) || descripcion.includes(term);
    });
  }, [categories, search]);

  const openCreateModal = () => {
    setEditingCategory(null);
    reset(initialFormValues);
    setIsModalOpen(true);
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    reset({
      nombre: category.nombre ?? "",
      descripcion: category.descripcion ?? "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
    setIsModalOpen(false);
    setEditingCategory(null);
    reset(initialFormValues);
  };

  const openDeleteModal = (category: Category) => {
    setConfirmDeleteModal({
      open: true,
      category,
    });
  };

  const closeDeleteModal = () => {
    if (isDeleting) return;
    setConfirmDeleteModal({
      open: false,
      category: null,
    });
  };

  const onSubmit = async (values: CategorySubmitValues) => {
    const payload = {
      nombre: values.nombre.trim(),
      descripcion: values.descripcion.trim(),
    };

    try {
      if (editingCategory) {
        await updateCategory({
          id: editingCategory.id,
          ...payload,
        }).unwrap();

        toast.success("Categoría actualizada correctamente");
      } else {
        await createCategory(payload).unwrap();
        toast.success("Categoría creada correctamente");
      }

      closeModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo guardar la categoría");
    }
  };

  const handleDeleteConfirmed = async () => {
    if (!confirmDeleteModal.category) return;

    try {
      await deleteCategory(confirmDeleteModal.category.id).unwrap();
      toast.success("Categoría eliminada correctamente");
      closeDeleteModal();
    } catch (error: any) {
      toast.error(error?.data?.message || "No se pudo eliminar la categoría");
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[34px] border border-[#ead4da] bg-gradient-to-br from-[#f8e7eb] via-[#f7ecef] to-[#fcf7f8] px-6 py-10 shadow-sm dark:border-border dark:bg-card md:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#be7a8f] dark:border-border dark:bg-background/70 dark:text-primary">
                <FolderTree className="h-3.5 w-3.5" />
                Administración
              </div>

              <h1 className="mt-4 text-3xl font-semibold text-[#9a6274] dark:text-foreground md:text-4xl">
                Gestión de categorías
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#9b7883] dark:text-foreground/70">
                Organiza las secciones del catálogo, crea nuevas categorías y
                administra la información principal de Maison C&amp;O Élégance.
              </p>
            </div>

            <button
              onClick={openCreateModal}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              <Plus className="h-4 w-4" />
              Nueva categoría
            </button>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Categorías registradas
              </h2>
              <p className="mt-1 text-sm text-foreground/60">
                {filteredCategories.length} categoría(s) encontrada(s)
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
              <input
                type="text"
                placeholder="Buscar por nombre o descripción"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-6">
            {isLoading && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-foreground/60">
                Cargando categorías...
              </div>
            )}

            {isError && (
              <div className="rounded-[24px] border border-border bg-background py-14 text-center text-red-500">
                No se pudieron cargar las categorías.
              </div>
            )}

            {!isLoading && !isError && filteredCategories.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-border bg-background px-6 py-16 text-center">
                <Tag className="h-10 w-10 text-foreground/35" />
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  No hay categorías para mostrar
                </h3>
                <p className="mt-2 max-w-md text-sm text-foreground/60">
                  Todavía no has creado categorías o no hay coincidencias con la
                  búsqueda actual.
                </p>
              </div>
            )}

            {!isLoading && !isError && filteredCategories.length > 0 && (
              <div className="mt-2 overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-3">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Nombre
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Descripción
                      </th>
                      <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                        Acciones
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCategories.map((category) => (
                      <tr
                        key={category.id}
                        className="rounded-[22px] bg-background shadow-sm"
                      >
                        <td className="rounded-l-[22px] px-4 py-4 align-middle">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7e7ec] text-[#b77b8c] dark:bg-secondary dark:text-primary">
                              <Tag className="h-5 w-5" />
                            </div>

                            <div>
                              <p className="font-medium text-foreground">
                                {category.nombre}
                              </p>
                              <p className="mt-1 text-xs text-foreground/45">
                                ID: {category.id}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-sm text-foreground/70">
                          <p className="max-w-[360px]">
                            {category.descripcion?.trim() || "Sin descripción"}
                          </p>
                        </td>

                        <td className="rounded-r-[22px] px-4 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => openEditModal(category)}
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:bg-secondary"
                            >
                              <Pencil className="h-4 w-4" />
                              Editar
                            </button>

                            <button
                              onClick={() => openDeleteModal(category)}
                              disabled={isDeleting}
                              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600 transition hover:bg-red-100 disabled:opacity-50 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                              Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-2xl overflow-hidden rounded-[30px] border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {editingCategory ? "Editar categoría" : "Nueva categoría"}
                </h3>
                <p className="mt-1 text-sm text-foreground/60">
                  Completa la información de la categoría.
                </p>
              </div>

              <button
                onClick={closeModal}
                className="rounded-full border border-border p-2 text-foreground/70 transition hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6">
              <div className="grid grid-cols-1 gap-5">
                <div>
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

                <div>
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
                    ? editingCategory
                      ? "Guardando cambios..."
                      : "Creando categoría..."
                    : editingCategory
                    ? "Guardar cambios"
                    : "Crear categoría"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirmDeleteModal.open && confirmDeleteModal.category && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-[28px] border border-red-100 bg-white shadow-2xl dark:border-red-500/20 dark:bg-card">
            <div className="relative px-6 pb-4 pt-6 text-center">
              <button
                type="button"
                onClick={closeDeleteModal}
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
                ¿Estás segura de que deseas eliminar la categoría{" "}
                <span className="font-semibold text-foreground">
                  “{confirmDeleteModal.category.nombre}”
                </span>
                ?
              </p>

              <p className="mt-2 text-xs leading-5 text-foreground/50">
                Esta acción puede afectar la organización del catálogo si hay
                productos relacionados con esta categoría.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-[#fff8f8] px-6 py-5 dark:bg-background/40 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDeleteModal}
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
