import { For } from "solid-js";
import { store } from "../../../store";

import rustLogo from "/src/assets/logos/rust.png";
import jsLogo from "/src/assets/logos/js.png";
import tsLogo from "/src/assets/logos/ts.png";
import nodejsLogo from "/src/assets/logos/nodejs.png";
import javaLogo from "/src/assets/logos/java.png";
import pythonLogo from "/src/assets/logos/python.png";
import phpLogo from "/src/assets/logos/php.png";
import dartLogo from "/src/assets/logos/dart.png";
import tauriLogo from "/src/assets/logos/tauri.png";
import flutterLogo from "/src/assets/logos/flutter.png";
import reactLogo from "/src/assets/logos/react.png";
import svelteLogo from "/src/assets/logos/svelte.png";
import solidjsLogo from "/src/assets/logos/solidjs.png";
import laravelLogo from "/src/assets/logos/laravel.png";
import mysqlLogo from "/src/assets/logos/mysql.png";
import postgresLogo from "/src/assets/logos/postgres.png";
import mongodbLogo from "/src/assets/logos/mongodb.png";
import archLogo from "/src/assets/arch.png";
import windowsLogo from "/src/assets/logos/windows.png";
import {
  IconBrandGithub,
  IconFileCv,
  IconFileCvFilled,
} from "@tabler/icons-solidjs";

//  rust js/ts nodejs java python php dart
const Langlogos = [
  {
    name: "Rust",
    logo: rustLogo,
    color: "#dea584",
  },
  {
    name: "Javascript",
    logo: jsLogo,
    color: "#f7df1e",
  },
  {
    name: "Typescript",
    logo: tsLogo,
    color: "#007acc",
  },
  {
    name: "NodeJs",
    logo: nodejsLogo,
    color: "#7fbd01",
  },
  {
    name: "Java",
    logo: javaLogo,
    color: ["#e01d20", "#0e6fb6"],
  },
  {
    name: "Python",
    logo: pythonLogo,
    color: ["#326d9c", "#ffcf3f"],
  },
  {
    name: "Php",
    logo: phpLogo,
    color: "#8a94bf",
  },
  {
    name: "Dart",
    logo: dartLogo,
    color: ["#04599c", "#2ab5f5"],
  },
];

// tauri flutter react svelte solidjs laravel
const Frameworklogos = [
  {
    name: "Tauri",
    logo: tauriLogo,
    color: ["#23c8db", "#ffc131"],
  },
  {
    name: "Flutter",
    logo: flutterLogo,
    color: ["#0e47a1", "#68b6f8"],
  },
  {
    name: "React",
    logo: reactLogo,
    color: "#00d8ff",
  },
  {
    name: "Svelte",
    logo: svelteLogo,
    color: "#ff3e00",
  },
  {
    name: "Solidjs",
    logo: solidjsLogo,
    color: ["#90c2e9", "#1e4687"],
  },
  {
    name: "Laravel",
    logo: laravelLogo,
    color: "#ff291a",
  },
];

// mysql postgres mongodb
const Databaselogos = [
  {
    name: "Mysql",
    logo: mysqlLogo,
    color: "#4479a1",
  },
  {
    name: "Postgres",
    logo: postgresLogo,
    color: "#336791",
  },
  {
    name: "MongoDB",
    logo: mongodbLogo,
    color: "#4eb03e",
  },
];

const OSs = [
  {
    name: "Arch Linux",
    logo: archLogo,
    color: "#0f94d2",
  },
  {
    name: "Windows",
    logo: windowsLogo,
    color: "#0078d4",
  },
];

export default function () {
  return (
    <div class="size-full flex flex-col space-y-6 ">
      <div class="space-y-4">
        <div class="text-xl">{store.langTexts.hey}</div>
        <div class="text-5xl font-bold">{store.langTexts.iam}</div>
        <div class="text-3xl font-bold">{store.langTexts.jobTitle}</div>
        <div class="py-2">
          <p class="text-lg">{store.langTexts.whoami2}</p>
          <p class="text-lg mt-2">{store.langTexts.whoami2}</p>
        </div>
        <div class="flex gap-4">
          <a
            class="btn border border-border px-4 py-2 rounded bg-background/75 hover:bg-background/10 transition-colors duration-200 ease-in-out flex items-center space-x-2"
            href="https://github.com/ilyes-ced"
            target="_blank"
          >
            <IconBrandGithub />
            <p>{store.langTexts.viewProjects}</p>
          </a>
          <a
            class="btn border border-border px-4 py-2 rounded bg-background/75 hover:bg-background/10 transition-colors duration-200 ease-in-out flex items-center space-x-2"
            href="https://github.com/ilyes-ced"
            target="_blank"
          >
            <IconFileCv />
            <p>{store.langTexts.downResume}</p>
          </a>
        </div>
      </div>

      <h1 class="text-5xl font-extrabold">{store.langTexts.skills}</h1>
      <div class="">
        <div class="pl-4 space-y-2">
          <div class="">
            <h2 class="text-2xl font-extrabold py-4">
              {store.langTexts.progLangs}
            </h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Langlogos}>{(logo) => <Logo {...logo} />}</For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">
              {store.langTexts.frameworks}
            </h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Frameworklogos}>
                {(Frameworklogo) => <Logo {...Frameworklogo} />}
              </For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">
              {store.langTexts.databases}
            </h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Databaselogos}>
                {(Databaselogo) => <Logo {...Databaselogo} />}
              </For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">{store.langTexts.os}</h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={OSs}>{(OS) => <Logo {...OS} />}</For>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-5xl font-extrabold">{store.langTexts.education}</h1>

      <div class="pl-4 flex">
        <div class="pt-1">
          <div class="size-4 rounded-full bg-blue"></div>
          <div class="w-[2px] translate-x-[7px] h-11 rounded-full bg-blue"></div>
          <div class="size-4 rounded-full bg-blue"></div>
        </div>
        <div class="flex flex-col justify-between pl-4">
          <div class="experience__data bd-grid">
            <h3 class="font-semibold mb-1">{store.langTexts.bachelor}</h3>
            <span class="font-light text-sm">{store.langTexts.y2022}</span>
            <p class="my-2 text-justify"></p>
          </div>
          <div class="experience__data bd-grid">
            <h3 class="font-semibold mb-1">{store.langTexts.master}</h3>
            <span class="font-light text-sm">{store.langTexts.y2025}</span>
            <p class="my-2 text-justify"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo = (props: (typeof Langlogos)[0]) => {
  return (
    <div
      class="group relative inline-block"
      style={{
        "--glow-color": Array.isArray(props.color)
          ? `${props.color[0]}aa`
          : `${props.color}aa`,
      }}
    >
      {/* Glow animation */}
      <span
        class="pointer-events-none absolute inset-0 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          "box-shadow": "0 0 20px 10px var(--glow-color)",
          filter: "blur(12px)",
          "z-index": 0,
        }}
      ></span>

      <div
        class="relative overflow-hidden cursor-pointer flex items-center px-4 py-2 rounded text-xl space-x-2 transition-transform duration-200 ease-in-out hover:-translate-y-1.5 bg-transparent border-2"
        style={{
          background: Array.isArray(props.color)
            ? `linear-gradient(to bottom right, ${props.color[0]}40 0%, ${props.color[1]}40 100%)`
            : `${props.color}40`,

          "border-color": Array.isArray(props.color)
            ? props.color[0]
            : props.color,
        }}
      >
        {/* Animated bg color fill */}
        <span
          class="absolute inset-0 bg-fill z-0 w-full"
          style={{
            background: Array.isArray(props.color)
              ? `linear-gradient(to bottom right, ${props.color[0]}75 0%, ${props.color[1]}75 100%)`
              : `${props.color}75`,
          }}
        ></span>

        <img src={props.logo} class="size-8 relative z-10" alt="test" />
        <p class="relative z-10">{props.name}</p>
      </div>
    </div>
  );
};
