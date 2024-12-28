import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/config/theme-provider";
import App from "@/components/layouts/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio: HealthCare",
  description: "In progress...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          id="myChart"
          src="https://cdn.jsdelivr.net/npm/chart.js"
          defer
        />
      </head>

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} bg-[#F6F7F8]`}>
          <App>{children}</App>
        </body>
      </ThemeProvider>
    </html>
  );
}
