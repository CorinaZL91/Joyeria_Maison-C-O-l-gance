"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bell, Package, TriangleAlert, CheckCheck } from "lucide-react";
import { useAdminNotifications } from "@/app/hooks/useAdminNotifications";

export default function AdminNotifications() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useAdminNotifications();

  // 🔥 Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* 🔔 BOTÓN */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-secondary hover:text-primary"
        aria-label="Notificaciones"
      >
        <Bell className="h-5 w-5" />

        {/* 🔴 BADGE */}
        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-white shadow-sm">
            {unreadCount}
          </span>
        )}
      </button>

      {/* 📦 DROPDOWN */}
      {open && (
        <div className="absolute right-0 z-50 mt-3 w-[360px] overflow-hidden rounded-2xl border border-border bg-card shadow-xl backdrop-blur-md">
          {/* 🔹 HEADER */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Notificaciones
              </h3>
              <p className="text-xs text-muted-foreground">
                {unreadCount} sin leer
              </p>
            </div>

            {notifications.length > 0 && (
              <button
                onClick={markAllAsRead}
                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-foreground transition hover:bg-secondary"
              >
                <CheckCheck className="h-4 w-4" />
                Marcar todas
              </button>
            )}
          </div>

          {/* 🔹 CONTENIDO */}
          <div className="max-h-[420px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                No hay notificaciones por ahora
              </div>
            ) : (
              <div className="divide-y divide-border">
                {notifications.map((notification) => (
                  <Link
                    key={notification.id}
                    href={notification.link || "#"}
                    onClick={() => {
                      markAsRead(notification.id);
                      setOpen(false);
                    }}
                    className={`block px-4 py-3 transition ${
                      !notification.read
                        ? "bg-secondary/40 hover:bg-secondary"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* ICONO */}
                      <div className="mt-1">
                        {notification.type === "order" ? (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Package className="h-4 w-4" />
                          </div>
                        ) : (
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                            <TriangleAlert className="h-4 w-4" />
                          </div>
                        )}
                      </div>

                      {/* TEXTO */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold text-foreground">
                            {notification.title}
                          </p>

                          {!notification.read && (
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                          )}
                        </div>

                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                          {notification.message}
                        </p>

                        <p className="mt-2 text-xs text-muted-foreground/70">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
