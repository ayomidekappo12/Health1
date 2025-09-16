import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/config/theme-provider";
import App from "@/components/layouts/app";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: HealthCare",
  description:
    "Professional medical dashboard for patient management and diagnosis tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* ✅ Load Chart.js via Next.js Script */}
        <Script
          id="chartjs"
          src="https://cdn.jsdelivr.net/npm/chart.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} bg-[#F6F7F8]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  );
}
