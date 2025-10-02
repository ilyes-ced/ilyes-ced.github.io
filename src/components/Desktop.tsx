import { For, Match, Switch } from "solid-js";
import Terminal from "./apps/Terminal";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import { store } from "../store";
import Gui from "./apps/Gui";
import { Apps } from "./Apps";

// in store: activeApps

export default function Desktop() {
  return (
    <div class="h-full relative">
      <For each={Apps}>
        {(activeApp, index) => {
          const i = index(); // current index
          const x = (i % 10) * 100; // column index * 100
          const y = Math.floor(i / 10) * 100; // row index * 100

          return (
            <DesktopIcon
              name={activeApp.name}
              icon={activeApp.icon}
              x={x}
              y={y}
              onDblClick={() => {
                console.log("================================");
              }}
            />
          );
        }}
      </For>

      <For each={store.activeApps}>
        {(activeApp) => <Window app={activeApp}>{activeApp.component}</Window>}
      </For>
    </div>
  );
}
