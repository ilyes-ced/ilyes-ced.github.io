import Terminal from "./apps/Terminal";
import Window from "./Window";

// in store: activeApps
const App = {
  name: "terminal",
  component: <Terminal></Terminal>,
};

export default function Desktop() {
  return (
    <div class="h-full">
      desktop
      <Window name={App.name}>{App.component}</Window>
    </div>
  );
}
