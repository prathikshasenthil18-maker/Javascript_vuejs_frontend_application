import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 21 (ES2023+ / Node.js 21)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
