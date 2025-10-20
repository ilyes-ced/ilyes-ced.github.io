import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [devtools(), solid(), tailwindcss()],
  start: {
    ssr: true,
    server: {
      baseURL: process.env.BASE_PATH,
      preset: "static",
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
});
