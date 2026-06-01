import { api } from "../api";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  AuthUser,
} from "@/app/models/Auth";

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    register: build.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),

    me: build.query<{ success: boolean; data: AuthUser }, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),

    logout: build.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLogoutMutation,
} = authApi;
