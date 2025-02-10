import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/notion": {
        target: "https://api.notion.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/notion/, ""),
      },
    },
  },
});
