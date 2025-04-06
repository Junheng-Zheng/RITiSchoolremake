import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  base: "/~jz7259/ISTE340/project2/",
  plugins: [react(), tailwindcss()],
});
