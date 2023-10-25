import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "sport-school",
  server: {
    port: 3000,
  },
});
