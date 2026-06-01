// src/app/state/services/alertApi.ts

import { api } from "../api";

import type {
  StockAlert,
  AlertsResponse,
  AlertResponse,
  AlertMessageResponse,
} from "@/app/models/Alert";

export const alertApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getActiveAlerts: build.query<StockAlert[], void>({
      query: () => "/alerts",
      transformResponse: (response: AlertsResponse) => response?.data ?? [],
      providesTags: ["Alerts"],
    }),

    getAllAlerts: build.query<StockAlert[], void>({
      query: () => "/alerts/all",
      transformResponse: (response: AlertsResponse) => response?.data ?? [],
      providesTags: ["Alerts"],
    }),

    getAlertById: build.query<StockAlert, number>({
      query: (id) => `/alerts/${id}`,
      transformResponse: (response: AlertResponse) => response.data,
      providesTags: ["Alerts"],
    }),

    deactivateAlert: build.mutation<AlertMessageResponse, number>({
      query: (id) => ({
        url: `/alerts/${id}/deactivate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Alerts"],
    }),
  }),
});

export const {
  useGetActiveAlertsQuery,
  useGetAllAlertsQuery,
  useGetAlertByIdQuery,
  useDeactivateAlertMutation,
} = alertApi;
