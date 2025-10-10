import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { setStore, store } from "./store";
import { onMount, onCleanup } from "solid-js";

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

  return (
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
      class="size-full flex flex-col bg-cover bg-center"
      style={{ "background-image": `url(${store.wallpaper})` }}
    >
      <Desktop />
      <Taskbar />
    </div>
  );
}
