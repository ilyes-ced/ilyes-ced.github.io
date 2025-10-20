import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [devtools(), solid(), tailwindcss()],
  build: {
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
