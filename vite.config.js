import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";
import tailwindcss from "@tailwindcss/vite";
import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";

export default defineConfig({
  base: "/my-portfolio/",

  plugins: [
    devtools(),
    solidPlugin(),
    tailwindcss(),
    solid({ adapter: staticAdapter() }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
