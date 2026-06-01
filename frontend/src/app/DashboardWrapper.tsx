"use client";

import React, { useEffect } from "react";
import Navbar from "./(components)/Navbar/Navbar";
import StoreProvider, { useAppDispatch } from "./redux";
import { authApi } from "./state/services/authApi";
import { setUser, logout } from "./state/authSlice";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function AuthInitializer({ children }: DashboardLayoutProps) {
  const dispatch = useAppDispatch();

  const { data, isSuccess, isError } = authApi.useMeQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (isSuccess && data?.data) {
      dispatch(setUser(data.data));
    }

    if (isError) {
      dispatch(logout());
    }
  }, [isSuccess, isError, data, dispatch]);

  return <>{children}</>;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-pink-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
}

export default function DashboardWrapper({ children }: DashboardLayoutProps) {
  return (
    <StoreProvider>
      <AuthInitializer>
        <DashboardLayout>{children}</DashboardLayout>
      </AuthInitializer>
    </StoreProvider>
  );
}
