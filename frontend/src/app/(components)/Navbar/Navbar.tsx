"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Menu,
  Sun,
  Search,
  Moon,
  X,
  User,
  ShoppingCart,
  LogIn,
  UserPlus,
  Package,
  LayoutDashboard,
  Tags,
  Bell,
  LogOut,
  Gem,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import type { RootState } from "@/app/redux";
import { setIsDarkMode } from "@/app/state";
import { logout } from "@/app/state/authSlice";
import { useGetCategoriesQuery } from "@/app/state/services/categoryApi";
import { useGetCartQuery } from "@/app/state/services/cartApi";
import { useLogoutMutation } from "@/app/state/services/authApi";
import AdminNotifications from "@/app/(components)/Notification/Notification";

interface Category {
  id: number;
  nombre: string;
  activa?: boolean;
}

function Navbar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const isDarkMode = useAppSelector(
    (state: RootState) => state.global.isDarkMode
  );

  const { user, isAuthenticated } = useAppSelector(
    (state: RootState) => state.auth
  );

  const [logoutApi] = useLogoutMutation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: cartData } = useGetCartQuery(undefined, {
    skip: !isAuthenticated || user?.rol === "administrador",
  });

  const cartCount =
    cartData?.items?.reduce(
      (acc: number, item: { cantidad: number }) => acc + item.cantidad,
      0
    ) || 0;

  const toggleTheme = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (user?.rol === "administrador") {
      router.push("/admin");
      return;
    }

    router.push("/perfil");
  };

  const handleCartClick = () => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    router.push("/cart");
  };

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }

    dispatch(logout());
    setIsMobileMenuOpen(false);
    router.push("/");
  };

  const goToSearchResults = (value: string) => {
    const trimmed = value.trim();

    if (!trimmed) {
      if (pathname === "/products") {
        router.replace("/products");
      } else {
        router.push("/products");
      }
      setIsMobileMenuOpen(false);
      return;
    }

    const targetUrl = `/products?search=${encodeURIComponent(trimmed)}`;

    if (pathname === "/products") {
      router.replace(targetUrl);
    } else {
      router.push(targetUrl);
    }

    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      goToSearchResults(value);
    }, 350);
  };

  const handleSearch = () => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    goToSearchResults(searchTerm);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    document.documentElement.className = isDarkMode ? "pink-dark" : "pink";
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const visibleCategories = useMemo(() => {
    if (!Array.isArray(categories)) return [];
    return categories.filter((category: Category) => category.activa !== false);
  }, [categories]);

  const categoryLinks = visibleCategories.map((category: Category) => ({
    name: category.nombre,
    href: `/categories?categoria=${category.id}`,
  }));

  const clientMenu = [
    { name: "Inicio", href: "/" },
    { name: "Última Colección", href: "/products" },
    ...categoryLinks,
    ...(isAuthenticated && user?.rol === "cliente"
      ? [{ name: "Mis pedidos", href: "/orders" }]
      : []),
  ];

  const adminMenu = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Productos", href: "/admin/products", icon: Gem },
    { name: "Categorías", href: "/admin/categories", icon: Tags },
    { name: "Pedidos", href: "/admin/orders", icon: Package },
    { name: "Alertas", href: "/admin/alerts", icon: Bell },
  ];

  const desktopLinks =
    isAuthenticated && user?.rol === "administrador" ? adminMenu : clientMenu;

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/products") return pathname === "/products";
    return pathname === href;
  };

  const isHome = pathname === "/";
  const transparentMode = isHome && !isScrolled && !isMobileMenuOpen;

  const headerClasses = transparentMode
    ? "bg-transparent border-transparent text-white"
    : "bg-background/95 backdrop-blur-md border-border text-foreground";

  const iconButtonClasses = transparentMode
    ? "border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white"
    : "border-border bg-card text-foreground hover:bg-secondary hover:text-primary";

  const searchInputClasses = transparentMode
    ? "w-full border-0 border-b border-white/30 bg-transparent pb-2 pl-9 pr-10 text-sm tracking-wide text-white placeholder:text-white/70 transition focus:border-white focus:outline-none"
    : "w-full border-0 border-b border-border bg-transparent pb-2 pl-9 pr-10 text-sm tracking-wide text-foreground placeholder:text-foreground/60 transition focus:border-primary focus:outline-none";

  const linkBaseClasses = transparentMode
    ? "text-white/85 hover:text-white"
    : "text-foreground/85 hover:text-primary";

  const activeLinkClasses = transparentMode ? "text-white" : "text-primary";
  const underlineClasses = transparentMode ? "bg-white" : "bg-primary";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${headerClasses}`}
    >
      <div className="w-full px-4 md:px-10">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 pt-5 md:px-10 md:pt-6">
          <div className="flex items-center">
            <Link href="/" className="relative block h-16 w-24 md:h-20 md:w-32">
              <Image
                src="/logo.png"
                alt="Logo Maison C&O"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden justify-center md:flex">
            <div className="relative w-full max-w-md">
              <input
                type="search"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className={searchInputClasses}
              />
              <button
                type="button"
                onClick={handleSearch}
                className={`absolute left-1 top-1/2 -translate-y-1/2 transition ${
                  transparentMode
                    ? "text-white/75 hover:text-white"
                    : "text-foreground/65 hover:text-primary"
                }`}
                aria-label="Buscar"
                title="Buscar"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="hidden items-center justify-end gap-3 md:flex">
            <button
              onClick={toggleTheme}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
              aria-label="Cambiar tema"
              title="Cambiar tema"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => router.push("/login")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
                  aria-label="Iniciar sesión"
                  title="Iniciar sesión"
                >
                  <LogIn size={18} />
                </button>

                <button
                  onClick={() => router.push("/register")}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
                  aria-label="Registrarse"
                  title="Registrarse"
                >
                  <UserPlus size={18} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleProfileClick}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
                  aria-label="Perfil"
                  title="Perfil"
                >
                  <User size={18} />
                </button>

                {user?.rol === "administrador" && <AdminNotifications />}

                {user?.rol !== "administrador" && (
                  <button
                    onClick={handleCartClick}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
                    aria-label="Carrito"
                    title="Carrito"
                  >
                    <div className="relative">
                      <ShoppingCart size={18} />
                      {cartCount > 0 && (
                        <span
                          className={`absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[10px] font-bold text-white shadow-sm ${
                            transparentMode ? "bg-white/30" : "bg-primary"
                          }`}
                        >
                          {cartCount}
                        </span>
                      )}
                    </div>
                  </button>
                )}

                <button
                  onClick={handleLogout}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
                  aria-label="Cerrar sesión"
                  title="Cerrar sesión"
                >
                  <LogOut size={18} />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-end md:hidden">
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${iconButtonClasses}`}
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div className="px-5 pt-4 md:hidden">
          <div className="relative">
            <input
              type="search"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className={searchInputClasses}
            />
            <button
              type="button"
              onClick={handleSearch}
              className={`absolute left-1 top-1/2 -translate-y-1/2 transition ${
                transparentMode
                  ? "text-white/75 hover:text-white"
                  : "text-foreground/65 hover:text-primary"
              }`}
              aria-label="Buscar"
              title="Buscar"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <nav className="hidden items-center justify-center gap-8 px-8 py-5 text-sm font-light tracking-wide md:flex">
          {desktopLinks.map((link) => {
            const isActive = isLinkActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative pb-1 transition duration-300 ${
                  isActive ? activeLinkClasses : linkBaseClasses
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${underlineClasses} ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {isMobileMenuOpen && (
          <div className="mt-4 border-t border-border bg-card md:hidden">
            <div className="flex flex-col py-2">
              {desktopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`border-b border-border px-5 py-4 transition hover:bg-secondary ${
                    isLinkActive(link.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {!isAuthenticated ? (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-border px-5 py-4 text-foreground hover:bg-secondary"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-border px-5 py-4 text-foreground hover:bg-secondary"
                  >
                    Registrarse
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleProfileClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="border-b border-border px-5 py-4 text-left text-foreground hover:bg-secondary"
                  >
                    {user?.rol === "administrador" ? "Ir a admin" : "Perfil"}
                  </button>

                  {user?.rol !== "administrador" && (
                    <button
                      onClick={() => {
                        handleCartClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="border-b border-border px-5 py-4 text-left text-foreground hover:bg-secondary"
                    >
                      Carrito {cartCount > 0 ? `(${cartCount})` : ""}
                    </button>
                  )}

                  <button
                    onClick={handleLogout}
                    className="border-b border-border px-5 py-4 text-left text-foreground hover:bg-secondary"
                  >
                    Cerrar sesión
                  </button>
                </>
              )}

              <button
                onClick={toggleTheme}
                className="px-5 py-4 text-left text-foreground hover:bg-secondary"
              >
                {isDarkMode ? "Modo claro" : "Modo oscuro"}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
