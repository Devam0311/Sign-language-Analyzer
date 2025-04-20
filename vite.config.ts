import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,             // you can leave this as 8080 (or change it to 3000 if you prefer)
    proxy: {
      // any request your app makes to /predict will be forwarded to your FastAPI
      "/predict": {
        target: "http://localhost:8000",
        changeOrigin: true,
        secure: false,      // set to true if using HTTPS on your backend
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
