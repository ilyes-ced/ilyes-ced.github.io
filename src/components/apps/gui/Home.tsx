import { AiFillGithub } from "solid-icons/ai";
import { IoDocumentSharp } from "solid-icons/io";
import { For } from "solid-js";

//  rust js/ts nodejs java python php dart
const Langlogos = [
  {
    name: "Rust",
    logo: "/src/assets/logos/rust.png",
    color: "#dea584",
  },
  {
    name: "Javascript",
    logo: "/src/assets/logos/js.png",
    color: "#f7df1e",
  },
  {
    name: "Typescript",
    logo: "/src/assets/logos/ts.png",
    color: "#007acc",
  },
  {
    name: "NodeJs",
    logo: "/src/assets/logos/nodejs.png",
    color: "#7fbd01",
  },
  {
    name: "Java",
    logo: "/src/assets/logos/java.png",
    color: ["#e01d20", "#0e6fb6"],
  },
  {
    name: "Python",
    logo: "/src/assets/logos/python.png",
    color: ["#326d9c", "#ffcf3f"],
  },
  {
    name: "Php",
    logo: "/src/assets/logos/php.png",
    color: "#8a94bf",
  },
  {
    name: "Dart",
    logo: "/src/assets/logos/dart.png",
    color: ["#04599c", "#2ab5f5"],
  },
];

// tauri flutter react svelte solidjs laravel
const Frameworklogos = [
  {
    name: "Tauri",
    logo: "/src/assets/logos/tauri.png",
    color: ["#23c8db", "#ffc131"],
  },
  {
    name: "Flutter",
    logo: "/src/assets/logos/flutter.png",
    color: ["#0e47a1", "#68b6f8"],
  },
  {
    name: "React",
    logo: "/src/assets/logos/react.png",
    color: "#00d8ff",
  },
  {
    name: "Svelte",
    logo: "/src/assets/logos/svelte.png",
    color: "#ff3e00",
  },
  {
    name: "Solidjs",
    logo: "/src/assets/logos/solidjs.png",
    color: ["#90c2e9", "#1e4687"],
  },
  {
    name: "Laravel",
    logo: "/src/assets/logos/laravel.png",
    color: "#ff291a",
  },
];

// mysql postgres mongodb
const Databaselogos = [
  {
    name: "Mysql",
    logo: "/src/assets/logos/mysql.png",
    color: "#4479a1",
  },
  {
    name: "Postgres",
    logo: "/src/assets/logos/postgres.png",
    color: "#336791",
  },
  {
    name: "MongoDB",
    logo: "/src/assets/logos/mongodb.png",
    color: "#4eb03e",
  },
];

const OSs = [
  {
    name: "Arch Linux",
    logo: "/src/assets/arch.png",
    color: "#0f94d2",
  },
  {
    name: "Windows",
    logo: "/src/assets/logos/windows.png",
    color: "#0078d4",
  },
];

export default function () {
  return (
    <div class="size-full flex flex-col space-y-6 ">
      <div class="space-y-4">
        <div class="text-xl">Hey there 👋</div>
        <div class="text-5xl font-bold">I'm Ilyes</div>
        <div class="text-3xl font-bold">Software Developer & Freelancer</div>
        <div class="py-2">
          <p class="text-lg">
            I'm a passionate self-taught developer with a deep interest in
            computers, technology, and how things work under the hood. Recently,
            I've been diving into low-level programming and embedded systems.
          </p>
          <p class="text-lg mt-2">
            While I don’t have professional experience yet, I’ve built several
            hands-on projects—from a custom torrent client to a Milanote-style
            app, plus a variety of full-stack websites. You can explore them all
            on my GitHub.
          </p>
        </div>
        <div class="flex gap-4">
          <a
            class="btn border border-border px-4 py-2 rounded bg-background/75 hover:bg-background/10 transition-colors duration-200 ease-in-out flex items-center space-x-2"
            href="https://github.com/ilyes-ced"
            target="_blank"
          >
            <AiFillGithub />
            <p>View My Projects</p>
          </a>
          <a
            class="btn border border-border px-4 py-2 rounded bg-background/75 hover:bg-background/10 transition-colors duration-200 ease-in-out flex items-center space-x-2"
            href="https://github.com/ilyes-ced"
            target="_blank"
          >
            <IoDocumentSharp />
            <p>downlaod resume</p>
          </a>
        </div>
      </div>

      <h1 class="text-5xl font-extrabold">skills</h1>
      <div class="">
        <div class="pl-4 space-y-2">
          <div class="">
            <h2 class="text-2xl font-extrabold py-4">Programming Languages</h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Langlogos}>{(logo) => <Logo {...logo} />}</For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">Frameworks</h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Frameworklogos}>
                {(Frameworklogo) => <Logo {...Frameworklogo} />}
              </For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">Databases</h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={Databaselogos}>
                {(Databaselogo) => <Logo {...Databaselogo} />}
              </For>
            </div>
          </div>

          <div class="">
            <h2 class="text-2xl font-extrabold py-4">Operating Systems</h2>
            <div class="pl-4 flex flex-wrap gap-2">
              <For each={OSs}>{(OS) => <Logo {...OS} />}</For>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-5xl font-extrabold">Education</h1>

      <div class="pl-4 flex">
        <div class="pt-1">
          <div class="size-4 rounded-full bg-blue"></div>
          <div class="w-[2px] translate-x-[7px] h-11 rounded-full bg-blue"></div>
          <div class="size-4 rounded-full bg-blue"></div>
        </div>
        <div class="flex flex-col justify-between pl-4">
          <div class="experience__data bd-grid">
            <h3 class="font-semibold mb-1">
              Bachelor's Degree in Information Thechnology
            </h3>
            <span class="font-light text-sm">
              2022 at Universite Abdelhamid Mehri Constantine 2, Constantine,
              Algeria
            </span>
            <p class="my-2 text-justify"></p>
          </div>
          <div class="experience__data bd-grid">
            <h3 class="font-semibold mb-1">
              Master's Degree in Information Thechnology
            </h3>
            <span class="font-light text-sm">
              2025 at Universite Abdelhamid Mehri Constantine 2, Constantine,
              Algeria
            </span>
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
