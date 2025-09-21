import { For } from "solid-js";
import { store } from "../store";
import { Apps } from "./Apps";

export default function Taskbar() {
  return (
    <div class="bg-[#ffffff10] h-10 flex flex-row backdrop-blur-md">
      <button class="bg-red-400 h-full p-4 flex items-center min-w-fit">
        start
      </button>
      <div class="flex items-center w-full">
        <For each={store.activeApps}>
          {(activeApp) => {
            const app = Apps.find((app) => app.name === activeApp);
            return app ? (
              <div class="flex items-center justify-center h-full min-w-fit p-2 aspect-square cursor-pointer">
                <img src={app.icon} alt="" class="size-full" />
              </div>
            ) : null;
          }}
        </For>
      </div>
      <div class="h-full text-xs text-foreground flex flex-col px-4 items-center justify-center min-w-fit">
        <div>hh:ss</div>
        <div>yyyy/mm/dd</div>
      </div>
    </div>
  );
}
