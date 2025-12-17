import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONE WASH | Limpeza Profissional com Drones",
  description:
    "Limpeza de fachadas, painéis solares e estruturas elevadas com tecnologia de drones. Precisão, segurança e resultados excepcionais.",
  keywords: [
    "limpeza com drones",
    "limpeza de fachadas",
    "painéis solares",
    "limpeza profissional",
    "drones",
    "São Paulo",
  ],
  authors: [{ name: "ONE WASH" }],
  openGraph: {
    title: "ONE WASH | Limpeza Profissional com Drones",
    description:
      "Alcançamos onde ninguém mais chega. Tecnologia de ponta em limpeza profissional.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
