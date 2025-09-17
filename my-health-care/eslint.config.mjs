// eslint.config.js
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs.recommended,

  {
    settings: {
      react: {
        version: "detect",
        jsxRuntime: "automatic", // React 17+ JSX transform
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tseslint.plugin || tseslint,
    },
    rules: {
      // React
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // TypeScript
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
    },
  },
];
