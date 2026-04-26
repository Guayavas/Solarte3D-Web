import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Solarte3D | Impresión 3D Profesional y Personalizada",
  description: "Llevamos tus ideas al mundo real con impresión 3D de alta precisión. Especialistas en figuras, repuestos industriales, decoración y prototipos personalizados en FDM y Resina.",
  keywords: ["impresión 3D", "Solarte3D", "prototipos", "figuras 3D", "repuestos 3D", "personalización", "Colombia"],
  authors: [{ name: "Solarte3D" }],
  openGraph: {
    title: "Solarte3D | Impresión 3D Profesional",
    description: "Transformamos tus ideas en objetos reales con la mejor tecnología 3D.",
    type: "website",
    locale: "es_CO",
    siteName: "Solarte3D",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
