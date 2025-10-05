// @ts-check

import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,

      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    // files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2020,
        sourceType: "module",
        tsconfigRootDir: import.meta.dirname,
      },
    },

    //
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
  { ignores: ["dist"] }
);
