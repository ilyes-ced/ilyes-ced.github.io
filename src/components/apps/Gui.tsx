import { For } from "solid-js";
const Grid = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px]">
      <div class="text-3xl font-bold">title</div>
      <div class="text-sm font-light">subtitle</div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>

      <div class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est
        consequuntur sunt eius similique consectetur itaque ipsa nam velit,
        voluptatem provident. Consectetur earum placeat perferendis tempore
        voluptate minima error illo!
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>
    </div>
  );
};

const pages = [
  { name: "aboutMe", content: () => <Grid /> },
  { name: "github", content: () => <div>test 11111</div> },
  { name: "projects", content: () => <div>test 22222</div> },
  { name: "education", content: () => <div>test 33333</div> },
  { name: "skills", content: () => <div>test 44444</div> },
  { name: "resume", content: () => <div>test 55555</div> },
  { name: "contact", content: () => <div>test 66666</div> },
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
