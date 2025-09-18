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
          css: {
            "--tw-prose-body": theme("colors.primary-black"),
            "--tw-prose-headings": theme("colors.primary-black"),
            "--tw-prose-lead": theme("colors.secondary-gray"),
            "--tw-prose-links": theme("colors.primary-purple"),
            "--tw-prose-bold": theme("colors.primary-black"),
            "--tw-prose-counters": theme("colors.secondary-gray"),
            "--tw-prose-bullets": theme("colors.secondary-gray"),
            "--tw-prose-hr": theme("colors.secondary-lightGray"),
            "--tw-prose-quotes": theme("colors.primary-black"),
            "--tw-prose-quote-borders": theme("colors.secondary-lightGray"),
            "--tw-prose-captions": theme("colors.secondary-gray"),
            "--tw-prose-code": theme("colors.system-red"),
            "--tw-prose-pre-code": theme("colors.secondary-white"),
            "--tw-prose-pre-bg": theme("colors.primary-black"),
            "--tw-prose-th-borders": theme("colors.secondary-lightGray"),
            "--tw-prose-td-borders": theme("colors.secondary-lightGray"),
          },
        },
        purple: {
          css: {
            "--tw-prose-headings": theme("colors.primary-purple"),
            "--tw-prose-links": theme("colors.primary-purple"),
            "--tw-prose-bold": theme("colors.primary-purple"),
          },
        },
      }),
    },
  },
  plugins: [
    animate,
    typography,
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".text-body": {
          fontSize: theme("fontSize.base")[0],
          lineHeight: theme("lineHeight.7"),
          fontWeight: theme("fontWeight.normal"),
          color: theme("colors.primary-black"),
        },
        ".text-body-sm": {
          fontSize: theme("fontSize.sm")[0],
          lineHeight: theme("lineHeight.5"),
          fontWeight: theme("fontWeight.normal"),
          color: theme("colors.primary-black"),
        },
        ".text-body-lg": {
          fontSize: theme("fontSize.lg")[0],
          lineHeight: theme("lineHeight.7"),
          fontWeight: theme("fontWeight.normal"),
          color: theme("colors.primary-black"),
        },
        ".text-body-xl": {
          fontSize: theme("fontSize.xl")[0],
          lineHeight: theme("lineHeight.8"),
          fontWeight: theme("fontWeight.normal"),
          color: theme("colors.primary-black"),
        },
      });
    }),
  ],
};

export default config;
