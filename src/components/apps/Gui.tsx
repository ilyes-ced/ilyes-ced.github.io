// apps/GUIHome.tsx
import { createSignal, JSX } from "solid-js";
import AboutMe from "./gui/AboutMe";
import Projects from "./gui/Projects";
import Skills from "./gui/Skills";
import Resume from "./gui/Resume";
import Socials from "./gui/Socials";
// ... import others

export default function GUIHome() {
  const [section, setSection] = createSignal("home");

  const sections: Record<string, JSX.Element> = {
    home: (
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-foreground">Welcome 👋</h1>
        <p class="text-secondary">I'm Ilyes, a web developer.</p>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <button onClick={() => setSection("aboutme")} class="btn">
            About Me
          </button>
          <button onClick={() => setSection("projects")} class="btn">
            Projects
          </button>
          <button onClick={() => setSection("skills")} class="btn">
            Skills
          </button>
          <button onClick={() => setSection("resume")} class="btn">
            Resume
          </button>
          <button onClick={() => setSection("socials")} class="btn">
            Socials
          </button>
        </div>
      </div>
    ),
    aboutme: <AboutMe />,
    projects: <Projects />,
    skills: <Skills />,
    resume: <Resume />,
    socials: <Socials />,
  };

  return (
    <div class="p-6 bg-background text-foreground h-full">
      <button
        onClick={() => setSection("home")}
        class="mb-4 text-blue underline"
      >
        ← Back
      </button>
      make it like this one https://aakash-sharma.netlify.app/
      {sections[section()]}
    </div>
  );
}
