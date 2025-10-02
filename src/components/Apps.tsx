import { JSX } from "solid-js/jsx-runtime";
import Gui from "./apps/Gui";
import Terminal from "./apps/Terminal";
import TerminalIcon from "/src/assets/Windows_Terminal.svg";
import TetrisIcon from "/src/assets/tetris.png";
import GuiIcon from "/src/assets/gui.png";
import Wallpapers from "./apps/Wallpapers";
import Tetris from "./apps/Tetris";
import WallpaperIcon from "/src/assets/wallpaper.png";

interface AppType {
  name: string;
  description: string;
  component: JSX.Element;
  icon: string;
  windowState: {
    min: boolean;
    max: boolean;
  };
}

const Apps: AppType[] = [
  {
    name: "terminal",
    description: "",
    component: <Terminal></Terminal>,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "gui",
    description: "",
    component: <Gui></Gui>,
    icon: GuiIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "tetris",
    description: "",
    component: <Tetris></Tetris>,
    icon: TetrisIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "wallpapers",
    description: "",
    component: <Wallpapers></Wallpapers>,
    icon: WallpaperIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
];

export { Apps, type AppType };
