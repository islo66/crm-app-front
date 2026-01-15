import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"),
      // If you need another alias under ~node_modules, you can add:
      // "~": path.resolve(__dirname, "node_modules"),
    },
  },
});
