import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import tailwindcss from "@tailwindcss/vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  base: "/ilyes-ced.github.io/",

  start: {
    ssr: true,
    server: {
      baseURL: process.env.BASE_PATH,
      preset: "static",
    },
  },

  plugins: [devtools(), solidPlugin(), tailwindcss(), solid()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
