import { For, Match, Show, Switch } from "solid-js";
import { setStore, store, toggleMinMax } from "../store";
import { Apps } from "./Apps";
import { createSignal, onCleanup, onMount } from "solid-js";
import StartMenu from "./startMenu";
import { FaSolidChevronUp } from "solid-icons/fa";
import Calendar from "./Calendar";

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
    <div class="bg-[#ffffff10] h-12 flex flex-row backdrop-blur-md px-4 py-0.5 space-x-2 z-50">
      <button
        id="startButton"
        onClick={() => setStore("showStartMenu", !store.showStartMenu)}
        class="cursor-pointer h-full w-fit px-3 flex items-center hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out rounded-sm"
      >
        <img
          src="../../src/assets/logos/windows.png"
          alt=""
          class="w-10 aspect-square"
        />
      </button>

      {/* start menu */}
      <div
        class="absolute bottom-14 left-4 transition-all duration-200 ease-in-out rounded-xl backdrop-blur-3xl"
        classList={{
          "opacity-100": store.showStartMenu,
          "opacity-0 translate-y-20 pointer-events-none": !store.showStartMenu,
        }}
      >
        <StartMenu />
      </div>

      <div class="self-center">
        <input
          type="text"
          class="bg-background/50 py-2 px-4 rounded-full focus:outline-0"
          placeholder="Search"
        />
      </div>
      <div class="flex items-center w-full space-x-1">
        <For each={store.taskbarPinnedApps}>
          {(taskbarApp) => (
            <div
              class="flex flex-col items-center justify-center h-full min-w-fit p-1 aspect-square cursor-pointer hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out rounded-sm"
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
              <img src={taskbarApp.icon} alt="" class="h-full aspect-square" />

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

      {/* language menu toggle */}
      <div
        id="langMenuToggle"
        onClick={() => setStore("showLangMenu", !store.showLangMenu)}
        class="h-full text-xs text-foreground flex px-4 items-center justify-center min-w-fit space-x-2  cursor-pointer  w-fit p-2  hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out rounded-sm"
      >
        <FaSolidChevronUp />
        <p>{store.lang}</p>
      </div>
      <div
        id="langMenu"
        class="absolute bottom-14 right-15 flex flex-col border border-border overflow-y-auto rounded-xl bg-black/50 p-4 transition-all duration-200 ease-in-out backdrop-blur-3xl"
        classList={{
          "opacity-100": store.showLangMenu,
          "opacity-0 translate-y-20 pointer-events-none": !store.showLangMenu,
        }}
      >
        <div
          class="px-8 py-2 rounded-lg cursor-pointer hover:bg-blue-300/10"
          onClick={() => {
            setStore("lang", "Fr");
            setStore("showLangMenu", false);
          }}
        >
          Fr
        </div>
        <div
          class="px-8 py-2 rounded-lg cursor-pointer hover:bg-blue-300/10"
          onClick={() => {
            setStore("lang", "En");
            setStore("showLangMenu", false);
          }}
        >
          En
        </div>
      </div>

      {/* date and time toggle */}
      <div
        id="showDateMenu"
        class="absolute bottom-14 right-2 flex flex-col border border-border overflow-y-auto rounded-xl bg-black/50 transition-all duration-200 ease-in-out backdrop-blur-3xl"
        classList={{
          "opacity-100": store.showDateMenu,
          "opacity-0 translate-x-20 pointer-events-none": !store.showDateMenu,
        }}
      >
        <Calendar />
      </div>

      <div
        onClick={() => setStore("showDateMenu", !store.showDateMenu)}
        id="dateMenuToggle"
        class="h-full text-xs text-foreground flex flex-col px-4 items-center justify-center min-w-fit rounded hover:bg-black/30 active:bg-black/50 transition-all duration-200 ease-in-out cursor-pointer "
      >
        <div>{formatTime()}</div>
        <div>{formatDate()}</div>
      </div>
    </div>
  );
}
