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
      <DesktopIcon name="App 1" x={0} y={0} />
      <DesktopIcon name="App 2" x={100} y={0} />
      <DesktopIcon name="App 3" x={0} y={100} />
      <DesktopIcon
        name="GUI Portfolio"
        icon={<Gui></Gui>}
        x={200}
        y={0}
        onDblClick={() => {}}
      />

      <For each={store.activeApps}>
        {(activeApp) => <Window app={activeApp}>{activeApp.component}</Window>}
      </For>
    </div>
  );
}
