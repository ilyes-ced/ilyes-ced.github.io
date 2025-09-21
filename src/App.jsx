import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";
import wallpaper from "/src/assets/win11_wallpaper.jpg";

export default function App() {
  return (
    <div
      class="size-full flex flex-col bg-cover bg-center"
      style={{ "background-image": `url(${wallpaper})` }}
    >
      <Desktop />
      <Taskbar />
    </div>
  );
}
