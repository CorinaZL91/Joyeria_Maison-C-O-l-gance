"use client";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#ead4da] bg-[#fdf7f9] dark:border-border dark:bg-card">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center">
        <p className="text-sm text-[#b56f84] dark:text-primary font-medium">
          Maison C&amp;O Élégance
        </p>

        <p className="mt-2 text-xs text-foreground/60">
          © {new Date().getFullYear()} Todos los derechos reservados, Odeth y
          Corina.
        </p>
      </div>
    </footer>
  );
}
