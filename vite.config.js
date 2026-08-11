import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 20 (ES2023 / Node.js 20)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
