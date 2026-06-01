import { api } from "../api";

import type {
  Category,
  GetCategoriesResponse,
  GetCategoryResponse,
  CreateCategoryPayload,
  UpdateCategoryPayload,
  CategoryMessageResponse,
} from "@/app/models/Category";

export const categoryApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      query: () => "/categories",
      transformResponse: (response: GetCategoriesResponse) =>
        response?.data ?? [],
      providesTags: ["Categories"],
    }),

    getCategoryById: build.query<Category, number>({
      query: (id) => `/categories/${id}`,
      transformResponse: (response: GetCategoryResponse) => response.data,
      providesTags: ["Categories"],
    }),

    createCategory: build.mutation<Category, CreateCategoryPayload>({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      transformResponse: (response: GetCategoryResponse) => response.data,
      invalidatesTags: ["Categories"],
    }),

    updateCategory: build.mutation<Category, UpdateCategoryPayload>({
      query: ({ id, ...rest }) => ({
        url: `/categories/${id}`,
        method: "PUT",
        body: rest,
      }),
      transformResponse: (response: GetCategoryResponse) => response.data,
      invalidatesTags: ["Categories"],
    }),

    deleteCategory: build.mutation<CategoryMessageResponse, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
