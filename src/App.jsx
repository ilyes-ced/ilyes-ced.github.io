import Taskbar from "./components/Taskbar";
import Desktop from "./components/Desktop";

export default function App() {
  return (
    <div class="size-full flex flex-col">
      <Desktop />
      <Taskbar />
    </div>
  );
}
