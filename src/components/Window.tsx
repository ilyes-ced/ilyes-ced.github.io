import { createSignal } from "solid-js";
import {
  useDraggable,
  axis,
  bounds,
  BoundsFrom,
  type Plugin,
  position,
  controls,
  ControlFrom,
} from "@neodrag/solid";

export default function Window(props: any) {
  const [draggableRef, setDraggableRef] = createSignal<HTMLElement | null>(
    null
  );
  const plugins: Plugin[] = [
    bounds(BoundsFrom.parent()),
    position({ default: { x: 100, y: 100 } }),
    controls({ allow: ControlFrom.selector("#titlebar") }),
  ];
  useDraggable(draggableRef, plugins);

  return (
    <div ref={setDraggableRef} id="Window" class="border w-96 h-64 absolute">
      <div id="titlebar" class="bg-red-400 flex flex-row justify-between">
        <div id="title">window title</div>
        <div id="window_buttons" class="flex flex-row">
          <div id="minimize">-</div>
          <div id="maximize">o</div>
          <div id="close">x</div>
        </div>
      </div>
      <div id="content" class="bg-white flex h-max">
        content here should be a child
        {props.children}
      </div>
    </div>
  );
}
