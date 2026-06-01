import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import DashboardWrapper from "./DashboardWrapper";
import Footer from "@/app/(components)/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maison C&O Élégance",
  description: "Sistema web de joyería Maison C&O Élégance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <DashboardWrapper>
          {children}
          <Footer />
          <Toaster richColors position="top-right" />
        </DashboardWrapper>
      </body>
    </html>
  );
}
