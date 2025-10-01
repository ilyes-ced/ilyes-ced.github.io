import { For, Match, Show, Switch } from "solid-js";
import { setStore, store, toggleMinMax } from "../store";
import { Apps } from "./Apps";
import { createSignal, onCleanup, onMount } from "solid-js";

export default function Taskbar() {
  const [time, setTime] = createSignal(new Date());

  let interval: any;

  onMount(() => {
    interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  onCleanup(() => {
    clearInterval(interval);
  });

  const formatTime = () => {
    const t = time();
    const hh = String(t.getHours()).padStart(2, "0");
    const mm = String(t.getMinutes()).padStart(2, "0");
    const ss = String(t.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  };

  const formatDate = () => {
    const t = time();
    const yyyy = t.getFullYear();
    const mm = String(t.getMonth() + 1).padStart(2, "0");
    const dd = String(t.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
  };

  return (
    <div class="bg-[#ffffff10] h-12 flex flex-row backdrop-blur-md">
      <button class="cursor-pointer h-full p-4 flex items-center hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out ">
        <img src="../../src/assets/arch.png" alt="" class="size-8" />
      </button>
      <div class="flex items-center w-full">
        <For each={store.taskbarPinnedApps}>
          {(taskbarApp) => (
            <div
              class="flex flex-col items-center justify-center h-full min-w-fit p-2 aspect-square cursor-pointer hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out"
              onClick={() => {
                if (store.activeApps.includes(taskbarApp)) {
                  if (store.focusedApp === taskbarApp.name) {
                    toggleMinMax(taskbarApp.name, "min");
                  } else {
                    setStore("focusedApp", taskbarApp.name);
                  }
                } else {
                  //todo: here start the clicked app
                  setStore("activeApps", (apps) => [...apps, taskbarApp]);
                  setStore("focusedApp", taskbarApp.name);
                }
              }}
            >
              <img src={taskbarApp.icon} alt="" class="size-full" />

              <div
                class="transition-all duration-200 ease-in-out rounded py-[2px] px-2"
                classList={{
                  "bg-blue-500": store.focusedApp === taskbarApp.name,
                  "bg-blue-100": store.activeApps.includes(taskbarApp),
                  "bg-transparent": !store.activeApps.includes(taskbarApp),
                }}
              ></div>
            </div>
          )}
        </For>
      </div>
      <div class="h-full text-xs text-foreground flex flex-col px-4 items-center justify-center min-w-fit">
        <div>{formatTime()}</div>
        <div>{formatDate()}</div>
      </div>
    </div>
  );
}
