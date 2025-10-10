import { JSX } from "solid-js/jsx-runtime";
import Gui from "./apps/Gui";
import Terminal from "./apps/Terminal";
import TerminalIcon from "/src/assets/Windows_Terminal.svg";
import TetrisIcon from "/src/assets/tetris.png";
import GuiIcon from "/src/assets/gui.png";
import Wallpapers from "./apps/Wallpapers";
import Wikipedia from "./apps/Wikipedia";
import Tetris from "./apps/Tetris";
import WallpaperIcon from "/src/assets/wallpaper.png";
import WikipediaIcon from "/src/assets/wiki.png";
import LinkedinLogo from "/src/assets/logos/linkedin.png";
import GithubLogo from "/src/assets/logos/github.png";
import GmailLogo from "/src/assets/logos/gmail.png";
import PacmanLogo from "/src/assets/logos/pacman.png";
import VscodeLogo from "/src/assets/logos/vscode.png";
import ChromeLogo from "/src/assets/logos/chrome.png";
import Github from "./apps/Github";
import Pacman from "./apps/Pacman";
import Vscode from "./apps/Vscode";
import Chrome from "./apps/Chrome";

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
    name: "Terminal",
    description: "Portfolio in CLI format",
    component: <Terminal />,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Portfolio",
    description: "Portfolio in GUI format",
    component: <Gui />,
    icon: GuiIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Tetris",
    description: "Tetris game",
    component: <Tetris />,
    icon: TetrisIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Wallpapers",
    description: "change desktop wallpaper",
    component: <Wallpapers />,
    icon: WallpaperIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Wikipedia",
    description: "the Wikipedia website",
    component: <Wikipedia />,
    icon: WikipediaIcon,
    windowState: {
      min: false,
      max: false,
    },
  },

  {
    name: "Github",
    description: "my Github profile",
    component: <Github />,
    icon: GithubLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "LinkedIn",
    description: "my LinkedIn profile",
    component: <Wikipedia />,
    icon: LinkedinLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Email",
    description: "My email",
    component: <Wikipedia />,
    icon: GmailLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Pacman",
    description: "pacman game",
    component: <Pacman />,
    icon: PacmanLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Vscode",
    description: "Vscode editor",
    component: <Vscode />,
    icon: VscodeLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: "Chrome",
    description: "Vscode editor",
    component: <Chrome />,
    icon: ChromeLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
];

export { Apps, type AppType };
