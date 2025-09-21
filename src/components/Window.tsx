import { createSignal, onMount, onCleanup } from "solid-js";

import {
  FaRegularWindowMinimize,
  FaRegularWindowMaximize,
} from "solid-icons/fa";
import { IoCloseSharp } from "solid-icons/io";

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
      ref={windowRef}
      class="window flex flex-col w-[1000px] h-[800px] absolute border overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-transparent"
      style={{
        width: `${size().w}px`,
        height: `${size().h}px`,
        left: `${pos().x}px`,
        top: `${pos().y}px`,
        position: "absolute",
      }}
    >
      {/* Title Bar */}
      <div
        id="titlebar"
        class="bg-red-400 flex flex-row justify-between cursor-move "
        onMouseDown={onTitleMouseDown}
        onDblClick={() => console.log("maximize window double click titlebar")}
      >
        <div id="title" class="p-2 font-bold">
          {props.name}
        </div>
        <div id="window_buttons" class="flex flex-row space-x-2">
          <div
            id="minimize"
            class="cursor-pointer hover:bg-yellow aspect-square h-full flex items-center justify-center"
          >
            <FaRegularWindowMinimize />
          </div>
          <div
            id="maximize"
            class="cursor-pointer hover:bg-green aspect-square h-full flex items-center justify-center"
          >
            <FaRegularWindowMaximize />
          </div>
          <div
            id="close"
            class="cursor-pointer hover:bg-red aspect-square h-full flex items-center justify-center"
          >
            <IoCloseSharp size={24} />
          </div>
        </div>
      </div>

      <div id="content" class="bg-blue-400 flex-grow h-max text-black ">
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
