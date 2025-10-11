import { For } from "solid-js";
import winn11_0 from "/src/assets/wallpapers/win11_0.jpg";
import winn11_1 from "/src/assets/wallpapers/win11_1.jpg";
import winn11_2 from "/src/assets/wallpapers/win11_2.jpg";
import winn11_3 from "/src/assets/wallpapers/win11_3.jpg";
import winn11_4 from "/src/assets/wallpapers/win11_4.jpg";
import winn11_5 from "/src/assets/wallpapers/win11_5.jpg";
import winn11_6 from "/src/assets/wallpapers/win11_6.jpg";
import winn11_7 from "/src/assets/wallpapers/win11_7.jpg";
import winn11_8 from "/src/assets/wallpapers/win11_8.jpg";
import winn11_9 from "/src/assets/wallpapers/win11_9.png";
import { createSignal } from "solid-js";
import { setStore } from "../../store";

const wallpapers = [
  winn11_0,
  winn11_1,
  winn11_2,
  winn11_3,
  winn11_4,
  winn11_5,
  winn11_6,
  winn11_7,
  winn11_8,
  winn11_9,
];

export default function () {
  const [selectedWall, setSelectedWall] = createSignal<number | null>(null); // index of wallpaper

  return (
    <div class="text-foreground flex flex-col h-full justify-between">
      <div
        class="w-full grid gap-4 p-4 overflow-scroll"
        style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));"
      >
        <For each={wallpapers}>
          {(wallpaper, index) => (
            <div class=" overflow-hidden h-48">
              <img
                onClick={() => {
                  setSelectedWall(index());
                }}
                src={wallpaper}
                alt=""
                class="w-full h-full object-cover cursor-pointer border-2 border-border transition-opacity duration-200 ease-in-out rounded-lg"
                classList={{
                  "border-blue-900/50": selectedWall() === index(),
                  "hover:opacity-50 hover:border-border": !(
                    selectedWall() === index()
                  ),
                }}
              />
            </div>
          )}
        </For>
      </div>
      <div class="p-4 w-full flex justify-end h-fit">
        <button
          onClick={() => setStore("wallpaper", wallpapers[selectedWall() ?? 0])}
          class="border p-2 rounded-lg cursor-pointer hover:bg-blue-300/10 flex items-center justify-center transition-color duration-200 ease-in-out"
        >
          Set as Wallpaper
        </button>
      </div>
    </div>
  );
}
