import { config as baseConfig } from "@repo/eslint-config/base";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ignores: ["eslint.config.js"],
  },
  ...baseConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // "@typescript-eslint/consistent-type-definitions": "off",
      "no-unused-vars": "off",
    },
  },
];
