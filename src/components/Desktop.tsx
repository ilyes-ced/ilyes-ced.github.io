import { createSignal, For } from "solid-js";
import Window from "./Window";
import DesktopIcon from "./DesktopIcon";
import { store } from "../store";
import { Apps } from "./Apps";
import pacmanLogo from "/src/assets/logos/pacman.png";

export default function Desktop(): {
  bottom: number;
  right: number;
} {
  let contextMenuRef!: HTMLDivElement;

  function isOutOfViewport(): { right: number; bottom: number } {
    const rect = contextMenuRef?.getBoundingClientRect?.();
    if (!rect) return { right: 0, bottom: 0 };

    return {
      right:
        rect.right > window.innerWidth ? rect.right - window.innerWidth : 0,
      bottom:
        rect.bottom > window.innerHeight ? rect.bottom - window.innerHeight : 0,
    };
  }

  const [contextMenu, setContextMenu] = createSignal(false);
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  return (
    <div
      id="desktop"
      class="h-full relative"
      onClick={() => {
        setContextMenu(false);
      }}
      onContextMenu={(e) => {
        e.preventDefault();

        if (e.target.id !== "desktop") return;

        const initialX = e.clientX;
        const initialY = e.clientY;

        setPos({ x: initialX, y: initialY });
        setContextMenu(true);

        queueMicrotask(() => {
          const bounds = isOutOfViewport();
          let x = initialX;
          let y = initialY;

          if (bounds.right > 0) x -= bounds.right;
          if (bounds.bottom > 0) y -= bounds.bottom;

          setPos({ x, y });
        });
      }}
    >
      <div
        ref={contextMenuRef}
        style={{
          top: pos().y + "px",
          left: pos().x + "px",
        }}
        class="absolute p-2 w-[300px] flex flex-col overflow-y-auto rounded-lg bg-blue-900/20 backdrop-blur-3xl transition-opacity duration-150 ease-in-out z-[1000] space-y-1"
        classList={{
          "opacity-0 pointer-events-none": !contextMenu(),
          "opacity-100": contextMenu(),
        }}
      >
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
        <div class="px-2 py-1 hover:bg-blue-300/10 rounded-lg cursor-pointer flex items-center space-x-2 ">
          <img src={pacmanLogo} class="size-4 aspect-square" />
          <p>adding options here later</p>
        </div>
      </div>

      <For each={Apps}>
        {(activeApp, index) => {
          const i = index(); // current index
          const x = (i % 3) * 100; // column index * 100
          const y = Math.floor(i / 3) * 100; // row index * 100

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
