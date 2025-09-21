import { createStore } from "solid-js/store";

//? all apps names here
type appsType = "terminal" | "gui";

interface GlobalStore {
  activeApp: appsType;
  activeApps: appsType[];
}

const [store, setStore] = createStore<GlobalStore>({
  activeApps: ["terminal", "gui"],
  activeApp: "terminal",
});

export { store, setStore };
