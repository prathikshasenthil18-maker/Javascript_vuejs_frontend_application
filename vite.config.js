import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 16 (ES2021 / Node.js 16)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2021",
    outDir: "dist",
    sourcemap: true,
  },
});
