import { createStore } from "solid-js/store";
import { Apps, AppType } from "./components/Apps";
import { createEffect } from "solid-js";
import englishLang from "./lang/en.json";
import frenchLang from "./lang/fr.json";
import winn11_3 from "/src/assets/wallpapers/win11_3.jpg";

//? all apps names here

interface GlobalStore {
  activeApps: AppType[];
  taskbarPinnedApps: AppType[];
  focusedApp: string; // names of apps
  showStartMenu: boolean;
  showLangMenu: boolean;
  showDateMenu: boolean;
  lang: "En" | "Fr";
  langTexts: Record<string, string>;
  wallpaper: string;
}

const [store, setStore] = createStore<GlobalStore>({
  //, "gui"
  activeApps: [],
  taskbarPinnedApps: [],
  focusedApp: "gui",
  showStartMenu: false,
  showLangMenu: false,
  showDateMenu: false,
  lang: "En",
  langTexts: frenchLang,
  wallpaper: winn11_3,
});

createEffect(() => {
  if (store.lang === "Fr") {
    setStore("langTexts", frenchLang);
  } else if (store.lang === "En") {
    setStore("langTexts", englishLang);
  }
});

function toggleMinMax(appName: string, minMax: "max" | "min") {
  const index = store.activeApps.findIndex((app) => app.name === appName);

  if (index !== -1) {
    const current = store.activeApps[index].windowState[minMax];
    setStore("activeApps", index, "windowState", minMax, !current);
  }
}

export { store, setStore, toggleMinMax };
