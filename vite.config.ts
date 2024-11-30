/// <reference types="vite/client" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: "./tsconfig.json",
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
        ecs: "./src/core/ecs/index.ts",
        entities: "./src/core/entities/index.ts",
        entity: "./src/core/entity/index.ts",
        pool: "./src/core/pool/index.ts",
        pools: "./src/core/pools/index.ts",
        system: "./src/core/system/index.ts",
      },
      formats: ["es", "cjs"],
      name: "ecjs",
    },
  },
});
