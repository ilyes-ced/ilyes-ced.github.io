import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import { setStore, store } from "./store";

export default function App() {
  return (
    <div
      onClick={(e) => {
        if (!e.target.closest("#startButton, #startMenu")) {
          setStore("showStartMenu", false);
        } else if (!e.target.closest("#langMenu, #langMenuToggle")) {
          setStore("showLangMenu", false);
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
