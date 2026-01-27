import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { setStore, store } from "./store";
import { onMount, onCleanup, createEffect, Switch, Match } from "solid-js";
import { Apps } from "./components/Apps";

export default function App() {
  onMount(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStore("showStartMenu", false);
        setStore("showLangMenu", false);
      }
    };
    window.addEventListener("keydown", handler);
    onCleanup(() => {
      window.removeEventListener("keydown", handler);
    });
  });

  createEffect(async () => {
    const { Apps } = await import("./components/Apps");
    setStore("activeApps", [Apps[1]]);
    setStore("taskbarPinnedApps", Apps);
  });

  function detectMobileDevice() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  return (

    <Switch fallback={<div>Not Found</div>}>
      <Match when={detectMobileDevice()}>
        <div class="overflow-y-scroll">
          <div class="m-2 mb-0 p-4 bg-red rounded-xl">This website is best viewed on a PC</div>
          {Apps[1].component}
        </div>
      </Match>
      <Match when={!detectMobileDevice()}>
        <div
          onClick={(e) => {
            if (!e.target.closest("#startButton, #startMenu")) {
              setStore("showStartMenu", false);
            }
            if (!e.target.closest("#langMenu, #langMenuToggle")) {
              setStore("showLangMenu", false);
            }
            if (!e.target.closest("#showDateMenu, #dateMenuToggle")) {
              setStore("showDateMenu", false);
            }
          }}
          class="size-full flex flex-col bg-cover bg-center overflow-hidden"
          style={{ "background-image": `url(${store.wallpaper})` }}
        >
          <Desktop />
          <Taskbar />
        </div>
      </Match>
    </Switch>



  );
}
