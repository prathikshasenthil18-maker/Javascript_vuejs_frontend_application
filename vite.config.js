import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 14 (ES2020 / Node.js 14)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2020",
    outDir: "dist",
    sourcemap: true,
  },
});
