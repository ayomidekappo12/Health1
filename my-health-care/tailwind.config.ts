import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}", // include utils
    "./pages/**/*.{ts,tsx}", // if you still use /pages
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
        "primary-purple": "#705CF6",
        "primary-black": "#1E1E1E",
        "primary-gray": "#FAFAFA",
        "secondary-gray": "#A7A7A7",
        "secondary-lightGray": "#E5E7EB",
        "secondary-white": "#FFFFFF",
        "system-red": "#FF5A5A",
        "system-green": "#22C55E",
        "system-yellow": "#FACC15",
        "system-blue": "#3B82F6",
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
      typography: (theme: any) => ({
        DEFAULT: {
        },
      }),
    },
  },
  plugins: [
    animate,
    typography,
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        
      });
    }),
  ],
};

export default config;
