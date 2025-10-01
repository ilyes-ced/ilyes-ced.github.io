import { JSX } from "solid-js/jsx-runtime";
import Gui from "./apps/Gui";
import Terminal from "./apps/Terminal";
import TerminalIcon from "/src/assets/Windows_Terminal.svg";

interface AppType {
  name: string;
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
    component: <Terminal></Terminal>,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "gui",
    component: <Gui></Gui>,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "idle test",
    component: <Gui></Gui>,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
];

export { Apps, type AppType };
