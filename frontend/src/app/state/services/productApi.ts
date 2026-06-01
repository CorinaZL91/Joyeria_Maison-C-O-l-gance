// src/app/state/services/productApi.ts

import { api } from "../api";

import type {
  Product,
  GetProductsParams,
  GetProductsResponse,
  GetProductResponse,
  CreateProductPayload,
  UpdateProductPayload,
  DeleteProductResponse,
  ProductFormDataPayload,
} from "@/app/models/Product";

const buildProductFormData = (payload: ProductFormDataPayload) => {
  const formData = new FormData();

  const usesSizes = payload.usar_tallas === true;

  if (payload.nombre !== undefined) {
    formData.append("nombre", payload.nombre);
  }

  if (payload.descripcion !== undefined) {
    formData.append("descripcion", payload.descripcion);
  }

  if (payload.precio !== undefined) {
    formData.append("precio", String(payload.precio));
  }

  if (payload.material !== undefined) {
    formData.append("material", payload.material);
  }

  if (payload.usar_tallas !== undefined) {
    formData.append("usar_tallas", String(payload.usar_tallas));
  }

  if (!usesSizes && payload.stock !== undefined) {
    formData.append("stock", String(payload.stock));
  }

  if (payload.stock_minimo !== undefined) {
    formData.append("stock_minimo", String(payload.stock_minimo));
  }

  if (payload.categoria_id !== undefined) {
    formData.append("categoria_id", String(payload.categoria_id));
  }

  if (payload.activo !== undefined) {
    formData.append("activo", String(payload.activo));
  }

  if (payload.removeImage !== undefined) {
    formData.append("removeImage", String(payload.removeImage));
  }

  if (usesSizes) {
    formData.append("tallas", JSON.stringify(payload.tallas ?? []));
  } else if (payload.tallas !== undefined) {
    formData.append("tallas", JSON.stringify([]));
  }

  if (payload.imagen) {
    formData.append("imagen", payload.imagen);
  }

  return formData;
};

export const productApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getProducts: build.query<Product[], GetProductsParams | undefined>({
      query: (params) => ({
        url: "/products",
        params: params ?? undefined,
      }),
      transformResponse: (response: GetProductsResponse) =>
        response?.data ?? [],
      providesTags: ["Products"],
    }),

    getAdminProducts: build.query<Product[], GetProductsParams | undefined>({
      query: (params) => ({
        url: "/products/admin/all",
        params: params ?? undefined,
      }),
      transformResponse: (response: GetProductsResponse) =>
        response?.data ?? [],
      providesTags: ["Products"],
    }),

    getProductById: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      transformResponse: (response: GetProductResponse) => response.data,
      providesTags: ["Products"],
    }),

    createProduct: build.mutation<Product, CreateProductPayload>({
      query: (payload) => ({
        url: "/products",
        method: "POST",
        body: buildProductFormData(payload),
      }),
      transformResponse: (response: GetProductResponse) => response.data,
      invalidatesTags: ["Products", "Alerts"],
    }),

    updateProduct: build.mutation<Product, UpdateProductPayload>({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: buildProductFormData(rest),
      }),
      transformResponse: (response: GetProductResponse) => response.data,
      invalidatesTags: ["Products", "Alerts"],
    }),

    deleteProduct: build.mutation<DeleteProductResponse, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products", "Alerts"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAdminProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
