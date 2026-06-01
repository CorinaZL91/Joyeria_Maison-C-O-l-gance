// src/app/state/services/cartApi.ts

import { api } from "../api";

import type {
  CartResponse,
  CartItem,
  AddToCartPayload,
  UpdateCartPayload,
  RemoveCartPayload,
  ApiMessageResponse,
} from "@/app/models/Cart";

export const cartApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCart: builder.query<CartResponse, void>({
      query: () => "/cart",
      transformResponse: (response: ApiMessageResponse<CartResponse>) =>
        response.data,
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation<ApiMessageResponse<CartItem>, AddToCartPayload>(
      {
        query: (body) => ({
          url: "/cart/items",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Cart"],
      }
    ),

    updateCartItem: builder.mutation<
      ApiMessageResponse<CartItem>,
      UpdateCartPayload
    >({
      query: ({ producto_id, cantidad, producto_talla_id }) => ({
        url: `/cart/items/${producto_id}`,
        method: "PUT",
        body: {
          cantidad,
          ...(producto_talla_id !== undefined ? { producto_talla_id } : {}),
        },
      }),
      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation<
      ApiMessageResponse<null>,
      RemoveCartPayload
    >({
      query: ({ producto_id, producto_talla_id }) => ({
        url: `/cart/items/${producto_id}`,
        method: "DELETE",
        body:
          producto_talla_id !== undefined ? { producto_talla_id } : undefined,
      }),
      invalidatesTags: ["Cart"],
    }),

    clearCart: builder.mutation<ApiMessageResponse<null>, void>({
      query: () => ({
        url: "/cart",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
} = cartApi;
