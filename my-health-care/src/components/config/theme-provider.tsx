"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // applies `class="dark"` to <html>
      defaultTheme="system" // "light", "dark", or "system"
      enableSystem // syncs with OS preference
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
