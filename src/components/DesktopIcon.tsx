// DesktopIcon.tsx
import { createSignal, onCleanup, onMount } from "solid-js";
import { setStore, store, toggleMinMax } from "../store";
import { Apps } from "./Apps";

export default function DesktopIcon(props: any) {
  const gridSize = 100;

  const [pos, setPos] = createSignal({ x: props.x || 0, y: props.y || 0 });
  const [dragging, setDragging] = createSignal(false);
  const [offset, setOffset] = createSignal({ x: 0, y: 0 });

  let iconRef: HTMLDivElement | undefined;
  let containerRef: HTMLDivElement | null = null;

  // Start dragging
  function onMouseDown(e: MouseEvent) {
    setDragging(true);
    setOffset({ x: e.clientX - pos().x, y: e.clientY - pos().y });
  }

  function onMouseMove(e: MouseEvent) {
    if (!dragging()) return;
    if (!containerRef) return;

    const bounds = containerRef.getBoundingClientRect();
    const newX = e.clientX - offset().x;
    const newY = e.clientY - offset().y;

    // Clamp to container bounds
    const clampedX = Math.max(0, Math.min(bounds.width - gridSize, newX));
    const clampedY = Math.max(0, Math.min(bounds.height - gridSize, newY));

    setPos({ x: clampedX, y: clampedY });
  }

  function onMouseUp() {
    if (!dragging()) return;
    setDragging(false);

    // Snap to nearest grid position
    const snappedX = Math.round(pos().x / gridSize) * gridSize;
    const snappedY = Math.round(pos().y / gridSize) * gridSize;

    setPos({ x: snappedX, y: snappedY });
  }

  onMount(() => {
    containerRef = iconRef?.parentElement;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  onCleanup(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  });

  //? +20 is for making them not stick to the edge idk if it could cause issues
  return (
    <div
      ref={iconRef}
      class="absolute cursor-pointer flex flex-col items-center h-fit border border-transparent hover:border-border hover:bg-blue-300/10 p-2 rounded-md size-18"
      style={{
        left: `${pos().x + 20}px`,
        top: `${pos().y + 20}px`,
        "user-select": "none",
      }}
      onMouseDown={onMouseDown}
      onDblClick={() => {
        //TODO: fix this duplicates
        if (!store.activeApps.includes(props)) {
          setStore("activeApps", (apps) => [
            ...apps,
            Apps.find((app) => app.name === props.name),
          ]);
          setStore("focusedApp", props.name);
        }
      }}
    >
      <img
        src={props.icon}
        class="size-12 aspect-square select-none"
        draggable="false"
      />
      <div class="text-lg text-center">
        {props.name}
        {props}
      </div>
    </div>
  );
}
