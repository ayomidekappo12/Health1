// eslint.config.js
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginA11y from "eslint-plugin-jsx-a11y";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import globals from "globals";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // Apply to all relevant files
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "react-refresh": pluginReactRefresh,
      "jsx-a11y": pluginA11y,
    },
    rules: {
      // Base JS + TS recommended rules
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked.rules,

      // React recommended
      ...(pluginReact.configs.recommended.rules || {}),

      // Hooks best practices
      ...(pluginReactHooks.configs.recommended.rules || {}),

      // Next.js core web vitals (inlined)
      "react/jsx-no-target-blank": "off", // Next.js handles this
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-unwanted-polyfillio": "warn",

      // Fast refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // React tweaks
      "react/react-in-jsx-scope": "off", // not needed in Next.js
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",

      // Accessibility
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn",

      // TypeScript overrides
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
