import { AiOutlinePoweroff } from "solid-icons/ai";
import { store } from "../store";
import { createEffect, For } from "solid-js";
import { Apps } from "./Apps";

export default function () {
  let inputRef!: HTMLInputElement;

  createEffect(() => {
    if (store.showStartMenu) {
      inputRef?.focus();
    }
  });

  return (
    <div
      id="startMenu"
      class="w-[800px]  flex flex-col border border-border overflow-y-auto rounded-xl bg-black/50"
    >
      <div class="p-8">
        <input
          ref={inputRef}
          type="text"
          class="w-full border-b-4 border-blue-600 bg-background/40 px-4 py-1 rounded-t-sm focus:outline-0"
          placeholder="Search"
        />
      </div>

      <div class="p-8">
        <p class="pb-2">Apps Menu</p>

        <div class="w-full h-full grid grid-cols-8 gap-4">
          <For each={Apps}>
            {(activeApp, index) => {
              return (
                <div class="cursor-pointer flex flex-col items-center h-fit border border-transparent hover:bg-blue-300/10 p-2 rounded-md ">
                  <img
                    src={activeApp.icon}
                    class="size-8 aspect-square select-none"
                    draggable="false"
                  />
                  <div class="text-md text-center">{activeApp.name}</div>
                </div>
              );
            }}
          </For>
        </div>
      </div>

      <div class="p-8">
        {/* maybe better to remove not sure */}
        <p class="pb-2">Recommended</p>
        <div class="w-full h-full grid grid-cols-2 gap-4">
          <For each={Apps.slice(0, 6)}>
            {(app, index) => {
              return (
                <div class="cursor-pointer flex flex-row items-center h-fit border border-transparent hover:bg-blue-300/10 p-2 rounded-md  space-x-4">
                  <img
                    src={app.icon}
                    class="size-8 aspect-square select-none"
                    draggable="false"
                  />
                  <div class="flex flex-col">
                    <div class="text-md">{app.name}</div>
                    <div class="text-md font-light overflow-visible">
                      {app.description}
                    </div>
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </div>

      <div class="px-8 py-4 border-t-1 border-border flex justify-between items-center">
        <div class="flex space-x-4 items-center">
          <img
            class="size-10 rounded-full border border-border bg-background"
            src="../../src/assets/arch.png"
            alt="Rounded avatar"
          />
          <p>username</p>
        </div>

        <button class="hover:bg-blue-300/10 cursor-pointer p-2 rounded-md">
          <AiOutlinePoweroff size={24} />
        </button>
      </div>
    </div>
  );
}
