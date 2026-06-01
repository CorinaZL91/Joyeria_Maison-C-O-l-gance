// src/app/state/services/orderApi.ts

import { api } from "../api";

import type {
  Order,
  OrdersResponse,
  MessageResponse,
  OrderResponse,
  CreateOrderPayload,
  UpdateOrderStatusPayload,
} from "@/app/models/Order";

export const orderApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    createOrder: build.mutation<Order, CreateOrderPayload>({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
      transformResponse: (response: OrderResponse) => response.data,
      invalidatesTags: ["Orders", "Cart", "Alerts", "Products"],
    }),

    getMyOrders: build.query<Order[], void>({
      query: () => "/orders/my-orders",
      transformResponse: (response: OrdersResponse) => response?.data ?? [],
      providesTags: ["Orders"],
    }),

    getAllOrders: build.query<Order[], void>({
      query: () => "/orders",
      transformResponse: (response: OrdersResponse) => response?.data ?? [],
      providesTags: ["Orders"],
    }),

    getOrderById: build.query<Order, number>({
      query: (id) => `/orders/${id}`,
      transformResponse: (response: OrderResponse) => response.data,
      providesTags: ["Orders"],
    }),

    cancelOrder: build.mutation<MessageResponse, number>({
      query: (id) => ({
        url: `/orders/${id}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: ["Orders", "Alerts", "Products"],
    }),

    updateOrderStatus: build.mutation<Order, UpdateOrderStatusPayload>({
      query: ({ id, estado }) => ({
        url: `/orders/${id}/status`,
        method: "PATCH",
        body: { estado },
      }),
      transformResponse: (response: OrderResponse) => response.data,
      invalidatesTags: ["Orders", "Alerts", "Products"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetMyOrdersQuery,
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useCancelOrderMutation,
  useUpdateOrderStatusMutation,
} = orderApi;
