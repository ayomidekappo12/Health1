import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        /* Brand + System Colors */
        primary: "#344256",
        accent: "#cbc8d4",
        black: "#000000",
        white: "#ffffff",
        cards: "#fafafa",
        secondary: "#f8fafc",

        /* State + Feedback */
        "active-bg-1": "#01f0d0",
        "active-bg-2": "#d8fcf7",
        "success-green": "#0bd984",
        "alert-orange": "#ff6200",

        /* Grays & Base */
        "text-dark": "#072635",
        "text-darker": "#0c3d5d",
        "text-blue-dark": "#084c77",
        "blue-medium": "#055a92",
        "blue-strong": "#006aac",
        "blue-deep": "#007bc7",
        "gray-base": "#707070",
        "gray-light": "#878787",
        "gray-bg-light": "#f6f6f6",
        "gray-bg": "#ededed",

        /* System palette support */
        border: "#e5e7eb",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        fugaz: ['"Fugaz One"', "cursive"],
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", "1.0625rem"], // 12px / 17px
        sm: ["0.8125rem", "1.125rem"], // 13px / 18px
        base: ["0.875rem", "1.1875rem"], // 14px / 19px
        md: ["1rem", "1.375rem"], // 16px / 22px
        lg: ["1.125rem", "1.5rem"], // 18px / 24px
        xl: ["1.375rem", "1.875rem"], // 22px / 30px
        "2xl": ["1.5rem", "2.0625rem"], // 24px / 33px
        "3xl": ["1.875rem", "2.5625rem"], // 30px / 41px
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
