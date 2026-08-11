import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 24 (ES2024+ / Node.js 24)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
