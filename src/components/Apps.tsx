import Gui from "./apps/Gui";
import Terminal from "./apps/Terminal";
import TerminalIcon from "/src/assets/Windows_Terminal.svg";

export const Apps = [
  {
    name: "terminal",
    component: <Terminal></Terminal>,
    icon: TerminalIcon,
  },
  {
    name: "gui",
    component: <Gui></Gui>,
    icon: TerminalIcon,
  },
];
