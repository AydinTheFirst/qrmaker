import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  define: {
    // Environment variables for SEO
    __SITE_URL__: JSON.stringify(
      process.env.SITE_URL || "https://qrmaker.aydinthefirst.com"
    ),
  },
});
