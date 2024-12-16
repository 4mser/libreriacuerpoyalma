// app/layout.tsx
import type { Metadata } from "next";
import { Cinzel, Cairo } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Librería Cuerpo y Alma",
  description: "Página de enlaces esotéricos para Librería Cuerpo y Alma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${cairo.variable}`}>
      <body className="antialiased bg-background text-foreground dark:bg-darkBg dark:text-darkForeground font-cairo transition-colors duration-500 relative">
          {children}
      </body>
    </html>
  );
}
