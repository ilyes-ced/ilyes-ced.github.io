import { createSignal, onMount, onCleanup } from "solid-js";

import {
  FaRegularWindowMinimize,
  FaRegularWindowMaximize,
} from "solid-icons/fa";
import { IoCloseSharp } from "solid-icons/io";
import { setStore, store, toggleMinMax } from "../store";

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
      class="window flex flex-col w-[1000px] h-[800px] absolute border border-border overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent rounded-xl bg-black/75 backdrop-blur-3xl "
      style={{
        width: props.app.windowState.max ? "100%" : `${size().w}px`,
        height: props.app.windowState.max ? "100%" : `${size().h}px`,
        left: props.app.windowState.max ? "0px" : `${pos().x}px`,
        top: props.app.windowState.max ? "0px" : `${pos().y}px`,
        position: "absolute",
        "z-index": store.focusedApp === props.app.name ? "10" : "",
      }}
      classList={{
        "opacity-0 pointer-events-none": props.app.windowState.min,
      }}
    >
      {/* Title Bar */}
      <div
        id="titlebar"
        class="flex flex-row justify-between cursor-move px-2 border-b border-border"
        onMouseDown={onTitleMouseDown}
        onDblClick={() => toggleMinMax(props.app.name, "max")}
      >
        <div id="title" class="p-2 font-bold ">
          {props.app.name}
        </div>
        <div id="window_buttons" class="flex flex-row space-x-2 items-center">
          <div
            id="minimize"
            onClick={() => toggleMinMax(props.app.name, "min")}
            class="group/min cursor-pointer rounded bg-blue-300 aspect-4/1 h-6 flex items-center justify-center"
          >
            <FaRegularWindowMinimize
              class="opacity-0 group-hover/min:opacity-100 
           pointer-events-none group-hover/min:pointer-events-auto 
           transition-all duration-200 ease-in-out"
            />
          </div>
          <div
            id="maximize"
            onClick={() => toggleMinMax(props.app.name, "max")}
            class="group/max cursor-pointer rounded bg-blue-600 aspect-4/1 h-6 flex items-center justify-center"
          >
            <FaRegularWindowMaximize
              class="opacity-0 group-hover/max:opacity-100 
           pointer-events-none group-hover/max:pointer-events-auto 
           transition-all duration-200 ease-in-out"
            />
          </div>
          <div
            id="close"
            onClick={() => {
              setStore("activeApps", (apps) =>
                apps.filter((app) => app.name !== props.app.name)
              );
            }}
            class="group/close cursor-pointer rounded bg-blue-900 aspect-4/1 h-6 flex items-center justify-center"
          >
            <IoCloseSharp
              class="opacity-0 group-hover/close:opacity-100 
           pointer-events-none group-hover/close:pointer-events-auto 
           transition-all duration-200 ease-in-out"
              size={24}
            />
          </div>
        </div>
      </div>

      <div id="content" class="windowScoll flex-grow h-max text-black ">
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
