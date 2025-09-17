import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent-purple-light)",
        cards: "var(--cards)",
        border: "var(--border)",
        black: "var(--black)",
        white: "var(--white)",

        "active-bg-1": "var(--active-bg-1)",
        "active-bg-2": "var(--active-bg-2)",
        "success-green": "var(--success-green)",
        "alert-orange": "var(--alert-orange)",

        "text-dark": "var(--text-dark)",
        "text-darker": "var(--text-darker)",
        "text-blue-dark": "var(--text-blue-dark)",
        "blue-medium": "var(--blue-medium)",
        "blue-strong": "var(--blue-strong)",
        "blue-deep": "var(--blue-deep)",
        "gray-base": "var(--gray-base)",
        "gray-light": "var(--gray-light)",
        "gray-bg-light": "var(--gray-bg-light)",
        "gray-bg": "var(--gray-bg)",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        xs: ["var(--font-size-12)", "var(--line-height-17)"],
        sm: ["var(--font-size-13)", "var(--line-height-18)"],
        base: ["var(--font-size-14)", "var(--line-height-19)"],
        md: ["var(--font-size-16)", "var(--line-height-22)"],
        lg: ["var(--font-size-18)", "var(--line-height-24)"],
        xl: ["var(--font-size-22)", "var(--line-height-30)"],
        "2xl": ["var(--font-size-24)", "var(--line-height-33)"],
        "3xl": ["var(--font-size-30)", "var(--line-height-41)"],
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
  plugins: [
    animate,
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* Legacy style equivalents */
        ".text-card-title": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-extrabold)",
          fontSize: "var(--font-size-24)",
          lineHeight: "var(--line-height-33)",
          color: "var(--text-dark)",
        },
        ".text-title-inner": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-18)",
          lineHeight: "var(--line-height-24)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-body-bold": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--text-dark)",
        },
        ".text-body-secondary": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-normal)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--gray-base)",
        },
        ".text-body-regular": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-normal)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--text-dark)",
        },

        /* Extended manrope styles */
        ".text-manrope-regular-xs": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-normal)",
          fontSize: "var(--font-size-12)",
          lineHeight: "var(--line-height-17)",
          color: "var(--text-dark)",
        },
        ".text-manrope-regular-sm": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-normal)",
          fontSize: "var(--font-size-13)",
          lineHeight: "var(--line-height-18)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-regular-md": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-normal)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-medium-md": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-medium)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-medium-lg": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-medium)",
          fontSize: "var(--font-size-16)",
          lineHeight: "var(--line-height-22)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-bold-md": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-14)",
          lineHeight: "var(--line-height-19)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-bold-xl": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-22)",
          lineHeight: "var(--line-height-30)",
          color: "var(--text-dark)",
          textTransform: "capitalize",
        },
        ".text-manrope-extrabold-2xl": {
          fontFamily: "var(--font-family-manrope)",
          fontWeight: "var(--font-weight-extrabold)",
          fontSize: "var(--font-size-30)",
          lineHeight: "var(--line-height-41)",
          color: "var(--text-dark)",
        },
      });
    }),
  ],
};

export default config;
