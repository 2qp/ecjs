/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      outDir: "dist",
    }),
  ],

  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: true,

    lib: {
      entry: {
        component: "./src/core/component/index.ts",
        entity: "./src/core/entity/index.ts",
      },
      formats: ["es", "cjs"],
      name: "ecjs",
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],

      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
