import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    extends: [
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    rules: {
      "no-console": ["warn", { allow: ["error"] }],
      "react-refresh/only-export-components": "off",
      "prettier/prettier": [
        "error",
        {
          usePrettierrc: true,
          endOfLine: "auto",
          trailingComma: "es5",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
