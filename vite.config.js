import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Vue + Vite build for Customer Version 12 (ES2019 / Node.js 12)
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "es2019",
    outDir: "dist",
    sourcemap: true,
  },
});
