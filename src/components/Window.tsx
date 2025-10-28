import { createSignal, onMount, onCleanup, Show } from "solid-js";

import { setStore, store, toggleMinMax } from "../store";
import { IconMinus, IconAppWindow, IconX } from "@tabler/icons-solidjs";

export default function Window(props: any) {
  // Position and size signals
  const [pos, setPos] = createSignal({ x: 100, y: 100 });
  const [size, setSize] = createSignal({ w: 1000, h: 800 });

  // Dragging state
  const [isDragging, setIsDragging] = createSignal(false);
  const [dragStart, setDragStart] = createSignal<{
    x: number;
    y: number;
  } | null>(null);

  // Resizing state
  const [isResizing, setIsResizing] = createSignal(false);
  const [resizeDir, setResizeDir] = createSignal<string | null>(null);
  const [resizeStart, setResizeStart] = createSignal<{
    x: number;
    y: number;
    w: number;
    h: number;
    px: number;
    py: number;
  } | null>(null);

  let windowRef: HTMLDivElement | undefined;

  // Drag window by titlebar
  function onTitleMouseDown(e: MouseEvent) {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - pos().x, y: e.clientY - pos().y });
  }

  function onMouseMove(e: MouseEvent) {
    if (isDragging()) {
      setPos({
        x: e.clientX - (dragStart()?.x ?? 0),
        y: e.clientY - (dragStart()?.y ?? 0),
      });
    } else if (isResizing() && resizeStart()) {
      let newW = resizeStart()!.w;
      let newH = resizeStart()!.h;
      let newX = resizeStart()!.px;
      let newY = resizeStart()!.py;

      const dx = e.clientX - resizeStart()!.x;
      const dy = e.clientY - resizeStart()!.y;

      if (resizeDir()!.includes("right")) {
        newW = Math.max(200, resizeStart()!.w + dx);
      }
      if (resizeDir()!.includes("left")) {
        newW = Math.max(200, resizeStart()!.w - dx);
        newX = resizeStart()!.px + dx;
      }
      if (resizeDir()!.includes("bottom")) {
        newH = Math.max(100, resizeStart()!.h + dy);
      }
      if (resizeDir()!.includes("top")) {
        newH = Math.max(100, resizeStart()!.h - dy);
        newY = resizeStart()!.py + dy;
      }

      setSize({ w: newW, h: newH });
      setPos({ x: newX, y: newY });
    }
  }

  function onMouseUp() {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDir(null);
    setDragStart(null);
    setResizeStart(null);
  }

  // Resize handle mouse down
  function onResizeMouseDown(e: MouseEvent, direction: string) {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeDir(direction);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      w: size().w,
      h: size().h,
      px: pos().x,
      py: pos().y,
    });
  }

  onMount(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });

  onCleanup(() => {
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  });

  return (
    <div
      onClick={() => setStore("focusedApp", props.app.name)}
      ref={windowRef}
      class={store.theme === "custom" ? "window" : "defaultWindow"}
      style={{
        width: props.app.windowState.max ? "100%" : `${size().w}px`,
        height: props.app.windowState.max ? "100%" : `${size().h}px`,
        left: props.app.windowState.max ? "0px" : `${pos().x}px`,
        top: props.app.windowState.max ? "0px" : `${pos().y}px`,
        position: "absolute",
        "z-index": store.focusedApp === props.app.name ? "10" : "",
      }}
      classList={{
        "rounded-xl": !props.app.windowState.max,
        "opacity-0 pointer-events-none": props.app.windowState.min,
      }}
    >
      {/* Title Bar */}
      <div
        id="titlebar"
        class="flex flex-row justify-between cursor-move  border-b border-border"
        onMouseDown={onTitleMouseDown}
        onDblClick={() => toggleMinMax(props.app.name, "max")}
      >
        <div id="title" class="p-2 font-bold">
          {props.app.name}
        </div>
        <Show
          when={store.theme === "default"}
          fallback={<CustomButtons appName={props.app.name as string} />}
        >
          <DefaultButtons appName={props.app.name as string} />
        </Show>
      </div>

      <div id="windowContent" class="windowScoll flex-grow h-max text-black">
        {props.children}
      </div>

      {/* Resize handles */}
      {/* Bottom Left */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "bottom-left")}
        class="absolute bottom-0 left-0 w-4 h-4 cursor-nesw-resize"
        style={{ background: "transparent" }}
      />
      {/* Bottom Right */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "bottom-right")}
        class="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize"
        style={{ background: "transparent" }}
      />
      {/* Top Left */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "top-left")}
        class="absolute top-0 left-0 w-4 h-4 cursor-nwse-resize"
        style={{ background: "transparent" }}
      />
      {/* Top Right */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "top-right")}
        class="absolute top-0 right-0 w-4 h-4 cursor-nesw-resize"
        style={{ background: "transparent" }}
      />
      {/* Left Edge */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "left")}
        class="absolute top-4 bottom-4 left-0 w-2 cursor-ew-resize"
        style={{ background: "transparent" }}
      />
      {/* Right Edge */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "right")}
        class="absolute top-4 bottom-4 right-0 w-2 cursor-ew-resize"
        style={{ background: "transparent" }}
      />
      {/* Top Edge */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "top")}
        class="absolute top-0 left-4 right-4 h-2 cursor-ns-resize"
        style={{ background: "transparent" }}
      />
      {/* Bottom Edge */}
      <div
        onMouseDown={(e) => onResizeMouseDown(e, "bottom")}
        class="absolute bottom-0 left-4 right-4 h-2 cursor-ns-resize"
        style={{ background: "transparent" }}
      />
    </div>
  );
}

const CustomButtons = (props: { appName: string }) => {
  return (
    <div id="window_buttons" class="flex flex-row space-x-2 items-center pr-2">
      <div
        id="minimize"
        onClick={() => toggleMinMax(props.appName, "min")}
        class="group/min cursor-pointer rounded bg-blue-300 aspect-4/1 h-6 flex items-center justify-center"
      >
        <IconMinus class="opacity-0 group-hover/min:opacity-100 pointer-events-none group-hover/min:pointer-events-auto transition-all duration-200 ease-in-out" />
      </div>
      <div
        id="maximize"
        onClick={() => toggleMinMax(props.appName, "max")}
        class="group/max cursor-pointer rounded bg-blue-600 aspect-4/1 h-6 flex items-center justify-center"
      >
        <IconAppWindow class="opacity-0 group-hover/max:opacity-100 pointer-events-none group-hover/max:pointer-events-auto transition-all duration-200 ease-in-out" />
      </div>
      <div
        id="close"
        onClick={() => {
          setStore("activeApps", (apps) =>
            apps.filter((app) => app.name !== props.appName)
          );
        }}
        class="group/close cursor-pointer rounded bg-blue-900 aspect-4/1 h-6 flex items-center justify-center"
      >
        <IconX
          class="opacity-0 group-hover/close:opacity-100 pointer-events-none group-hover/close:pointer-events-auto transition-all duration-200 ease-in-out"
          size={24}
        />
      </div>
    </div>
  );
};

const DefaultButtons = (props: { appName: string }) => {
  return (
    <div id="window_buttons" class=" flex flex-row space-x-2 items-center">
      <div
        id="minimize"
        onClick={(e) => {
          console.log(e);
          console.log("==============================");
          toggleMinMax(props.appName, "min");
        }}
        class="cursor-pointer hover:bg-border aspect-4/3 flex items-center justify-center h-full"
      >
        <IconMinus />
      </div>
      <div
        id="maximize"
        onClick={(e) => {
          console.log(e);
          console.log("==============================");
          toggleMinMax(props.appName, "max");
        }}
        class="cursor-pointer hover:bg-blue aspect-4/3 flex items-center justify-center h-full"
      >
        <IconAppWindow />
      </div>
      <div
        id="close"
        onClick={() => {
          setStore("activeApps", (apps) =>
            apps.filter((app) => app.name !== props.appName)
          );
        }}
        class="cursor-pointer hover:bg-red aspect-4/3 flex items-center justify-center h-full"
      >
        <IconX size={24} />
      </div>
    </div>
  );
};
