import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 22 (ES2024 / Node.js 22)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
