import { For } from "solid-js";
import AboutMe from "./gui/AboutMe";
import Projects from "./gui/Projects";
import Skills from "./gui/Skills";
import Resume from "./gui/Resume";
import Socials from "./gui/Socials";

const pages = [
  { name: "aboutMe", content: () => <AboutMe /> },
  // { name: "github", content: () => <Projects /> }, // put github url in projects and solcials
  { name: "projects", content: () => <Projects /> },
  { name: "education", content: () => <Projects /> },
  { name: "skills", content: () => <Projects /> },
  { name: "resume", content: () => <Projects /> },
  { name: "contact", content: () => <Projects /> },
];

import { createSignal, onCleanup, onMount } from "solid-js";

export default function FileExplorer() {
  const [activePage, setActivePage] = createSignal(0);

  return (
    <div class="size-full text-foreground flex flex-col ">
      <div class="flex space-x-2 h-12 w-full px-2 pt-2">
        <For each={pages}>
          {(page, index) => (
            <div
              class="rounded-t-lg border border-b-0 border-border py-2 px-4 flex justify-center items-center cursor-pointer"
              classList={{
                "bg-red": index() === activePage(),
                "hover:bg-red/50": !(index() === activePage()),
              }}
              onClick={() => setActivePage(index())}
            >
              {page.name}
            </div>
          )}
        </For>
      </div>
      <div class="p-2 pt-0 flex flex-1">
        <div class="border border-border rounded-b-lg size-full p-2 ">
          {/* do them like this one https://raminr77.vercel.app/projects/ */}
          {pages[activePage()].content()}
        </div>
      </div>
    </div>
  );
}
