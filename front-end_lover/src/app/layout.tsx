import type { Metadata } from "next";
import "./globals.css";
import NavbarVertical from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Andrea Palacios - Portfolio",
  description: "Bienvenido a mi portafolio dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavbarVertical />
        <main className="ml-16 md:ml-20">{children}</main>
      </body>
    </html>
  );
}
