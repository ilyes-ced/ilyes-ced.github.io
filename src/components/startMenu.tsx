import { AiOutlinePoweroff } from "solid-icons/ai";
import { store } from "../store";
import { createEffect, For } from "solid-js";

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
      class="w-[500px]  flex flex-col border border-border overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent rounded-xl bg-black/50 backdrop-blur-3xl"
    >
      <div class="p-8">
        <input
          ref={inputRef}
          type="text"
          class="w-full border-b-4 border-blue-600 bg-background px-4 py-1 rounded-t-sm"
          placeholder="Search"
        />
      </div>

      <div class="p-8">
        <p class="pb-2">Apps Menu</p>

        <div class="w-full h-full grid grid-cols-5 gap-4">
          <For each={store.activeApps}>
            {(activeApp, index) => {
              return (
                <div class="cursor-pointer flex flex-col items-center h-fit border border-transparent hover:bg-blue-300/10 p-2 rounded-md ">
                  <img
                    src={activeApp.icon}
                    class="size-12 aspect-square select-none"
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
          <For each={store.activeApps}>
            {(activeApp, index) => {
              return (
                <div class="cursor-pointer flex flex-row items-center h-fit border border-transparent hover:bg-blue-300/10 p-2 rounded-md  space-x-4">
                  <img
                    src={activeApp.icon}
                    class="size-12 aspect-square select-none"
                    draggable="false"
                  />
                  <div class="flex flex-col">
                    <div class="text-md">{activeApp.name}</div>
                    <div class="text-md font-light">description</div>
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
            class="w-10 h-10 rounded-full border border-border bg-background"
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
