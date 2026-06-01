"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { useGetAllOrdersQuery } from "@/app/state/services/orderApi";
import { useGetActiveAlertsQuery } from "@/app/state/services/alertApi";
import type { StockAlert } from "@/app/models/Alert";
import type { Order } from "@/app/models/Order";
import { useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";

export type AdminNotificationType = "order" | "stock";

export interface AdminNotification {
  id: string;
  type: AdminNotificationType;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  link?: string;
}

export function useAdminNotifications() {
  const { user, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth
  );

  const isAdmin = isAuthenticated && user?.rol === "administrador";

  const { data: orders = [], refetch: refetchOrders } = useGetAllOrdersQuery(
    undefined,
    {
      skip: !isAdmin,
      pollingInterval: 30000,
    }
  );

  const { data: alerts = [], refetch: refetchAlerts } = useGetActiveAlertsQuery(
    undefined,
    {
      skip: !isAdmin,
      pollingInterval: 30000,
    }
  );

  const [readIds, setReadIds] = useState<string[]>([]);
  const hasInitializedRef = useRef(false);
  const shownNotificationsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem("admin-read-notifications");
      if (stored) {
        const parsed = JSON.parse(stored);
        setReadIds(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      setReadIds([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("admin-read-notifications", JSON.stringify(readIds));
    } catch {
      // fail silently
    }
  }, [readIds]);

  const notifications = useMemo<AdminNotification[]>(() => {
    const safeOrders: Order[] = Array.isArray(orders) ? orders : [];
    const safeAlerts: StockAlert[] = Array.isArray(alerts) ? alerts : [];

    const orderNotifications: AdminNotification[] = safeOrders
      .filter((order) => order.estado === "pendiente")
      .map((order) => ({
        id: `order-${order.id}`,
        type: "order",
        title: "Nuevo pedido",
        message: `Se recibió el pedido #${order.id} de ${
          order.usuario?.nombre ?? "un cliente"
        }`,
        createdAt: order.fecha_pedido ?? new Date().toISOString(),
        read: readIds.includes(`order-${order.id}`),
        link: "/admin/orders",
      }));

    const stockNotifications: AdminNotification[] = safeAlerts
      .filter((alert) => alert.activa)
      .map((alert) => ({
        id: `stock-${alert.id}`,
        type: "stock",
        title: "Alerta de stock",
        message: `El producto "${
          alert.producto?.nombre ?? "Sin nombre"
        }" tiene stock bajo`,
        createdAt: alert.fecha_alerta ?? new Date().toISOString(),
        read: readIds.includes(`stock-${alert.id}`),
        link: "/admin/alerts",
      }));

    return [...orderNotifications, ...stockNotifications].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }, [orders, alerts, readIds]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    if (!isAdmin) return;

    if (!hasInitializedRef.current) {
      notifications.forEach((notification) => {
        shownNotificationsRef.current.add(notification.id);
      });

      hasInitializedRef.current = true;
      return;
    }

    notifications.forEach((notification) => {
      if (!shownNotificationsRef.current.has(notification.id)) {
        shownNotificationsRef.current.add(notification.id);

        toast(notification.title, {
          description: notification.message,
        });
      }
    });
  }, [notifications, isAdmin]);

  const markAsRead = (id: string) => {
    setReadIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const markAllAsRead = () => {
    setReadIds(notifications.map((notification) => notification.id));
  };

  const refreshNotifications = () => {
    refetchOrders();
    refetchAlerts();
  };

  return {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    refreshNotifications,
  };
}
