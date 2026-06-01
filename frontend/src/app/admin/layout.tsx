"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/app/redux";
import { logout, setUser } from "@/app/state/authSlice";
import { useMeQuery } from "@/app/state/services/authApi";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { data, isLoading, isFetching, isError } = useMeQuery();

  useEffect(() => {
    if (isLoading || isFetching) return;

    if (isError || !data?.data) {
      dispatch(logout());
      router.replace("/login");
      return;
    }

    if (data.data.rol !== "administrador") {
      router.replace("/");
      return;
    }

    dispatch(setUser(data.data));
  }, [data, isLoading, isFetching, isError, dispatch, router]);

  if (isLoading || isFetching) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">
          Cargando panel administrativo...
        </p>
      </div>
    );
  }

  if (isError || !data?.data || data.data.rol !== "administrador") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">Validando permisos de acceso...</p>
      </div>
    );
  }

  return <>{children}</>;
}
