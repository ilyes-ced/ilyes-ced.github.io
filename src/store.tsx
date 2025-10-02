import { createStore } from "solid-js/store";
import { Apps, AppType } from "./components/Apps";

//? all apps names here

interface GlobalStore {
  activeApps: AppType[];
  taskbarPinnedApps: AppType[];
  focusedApp: string; // names of apps
  showStartMenu: boolean;
  showLangMenu: boolean;
  lang: "En" | "Fr";
}

const [store, setStore] = createStore<GlobalStore>({
  //, "gui"
  activeApps: Apps.slice(0, -1),
  taskbarPinnedApps: Apps,
  focusedApp: "gui",
  showStartMenu: false,
  showLangMenu: false,
  lang: "En",
});

function toggleMinMax(appName: string, minMax: "max" | "min") {
  const index = store.activeApps.findIndex((app) => app.name === appName);

  if (index !== -1) {
    const current = store.activeApps[index].windowState[minMax];
    setStore("activeApps", index, "windowState", minMax, !current);
  }
}

export { store, setStore, toggleMinMax };
