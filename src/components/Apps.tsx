import { JSX } from "solid-js/jsx-runtime";
import Gui from "./apps/Gui";
import Terminal from "./apps/Terminal";
import TerminalIcon from "/src/assets/Windows_Terminal.svg";
import TetrisIcon from "/src/assets/tetris.png";
import GuiIcon from "/src/assets/thisPC.png";
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
import PaintLogo from "/src/assets/logos/paint.png";
import MinesweeperLogo from "/src/assets/logos/minesweeper.png";
import Github from "./apps/Github";
import Pacman from "./apps/Pacman";
import Vscode from "./apps/Vscode";
import Chrome from "./apps/Chrome";
import { langTexts, store } from "../store";
import MSpaint from "./apps/MSpaint";
import Minesweeper from "./apps/Minesweeper";

//thisPC.png

interface AppType {
  name: string;
  description: string;
  component: JSX.Element;
  icon: string;
  windowState: {
    min: boolean;
    max: boolean;
  };
  windowColor?: string;
  topBarColor?: string;
}

const Apps: AppType[] = [
  {
    name: langTexts().termName,
    description: langTexts().termDesc,
    component: <Terminal />,
    icon: TerminalIcon,
    windowState: {
      min: false,
      max: false,
    },
    windowColor: "#090909",
    topBarColor: "#050505",
  },
  {
    name: langTexts().portName,
    description: langTexts().portDesc,
    component: <Gui />,
    icon: GuiIcon,
    windowState: {
      min: false,
      max: false,
    },
    windowColor: "#090909",
    topBarColor: "#050505",
  },
  {
    name: langTexts().tetrisName,
    description: langTexts().tetrisDesc,
    component: <Tetris />,
    icon: TetrisIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().wallName,
    description: langTexts().wallDesc,
    component: <Wallpapers />,
    icon: WallpaperIcon,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().wikiName,
    description: langTexts().wikiDesc,
    component: <Wikipedia />,
    icon: WikipediaIcon,
    windowState: {
      min: false,
      max: false,
    },
  },

  {
    name: langTexts().ghName,
    description: langTexts().ghDesc,
    component: <Github />,
    icon: GithubLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().lnName,
    description: langTexts().lnDesc,
    component: <Wikipedia />,
    icon: LinkedinLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().emailName,
    description: langTexts().emailDesc,
    component: <Wikipedia />,
    icon: GmailLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().pacmanName,
    description: langTexts().pacmanDesc,
    component: <Pacman />,
    icon: PacmanLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().vsName,
    description: langTexts().vsDesc,
    component: <Vscode />,
    icon: VscodeLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().chromeName,
    description: langTexts().chromeDesc,
    component: <Chrome />,
    icon: ChromeLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().paintName,
    description: langTexts().paintDesc,
    component: <MSpaint />,
    icon: PaintLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
  {
    name: langTexts().minesweeperName,
    description: langTexts().minesweeperDesc,
    component: <Minesweeper />,
    icon: MinesweeperLogo,
    windowState: {
      min: false,
      max: false,
    },
  },
];

export { Apps, type AppType };
