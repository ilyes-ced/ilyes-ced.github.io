import { createSignal, onMount, For } from "solid-js";
import { store } from "../../store";

interface TerminalLine {
  text: string;
  style?: string;
}

export default function Terminal() {
  let inputRef: HTMLInputElement | undefined;

  const [lines, setLines] = createSignal<TerminalLine[]>([
    {
      text: "Welcome to my portfolio terminal!",
      style: "text-green",
    },
    {
      text: "Type 'help' to see available commands.",
      style: "text-yellow",
    },
  ]);

  const [command, setCommand] = createSignal("");
  const [history, setHistory] = createSignal<string[]>([]);
  const [historyIndex, setHistoryIndex] = createSignal<number | null>(null);

  const commands: Record<string, TerminalLine[]> = {
    help: [
      { text: "Available commands:", style: "text-blue" },
      { text: "aboutme    - Learn more about me", style: "text-foreground" },
      { text: "github     - View my GitHub profile", style: "text-foreground" },
      { text: "projects   - See my projects", style: "text-foreground" },
      { text: "education  - See my education", style: "text-foreground" },
      { text: "experience - Work experience", style: "text-foreground" },
      { text: "skills     - My technical skills", style: "text-foreground" },
      { text: "resume     - Download my resume", style: "text-foreground" },
      { text: "socials    - View my social links", style: "text-foreground" },
    ],
    aboutme: [
      {
        text: "I'm a passionate web developer focused on building fast, accessible, and beautiful user experiences.",
        style: "text-green",
      },
    ],
    github: [
      {
        text: "🔗 https://github.com/yourusername",
        style: "text-blue underline",
      },
    ],
    projects: [
      { text: "📁 Project 1 - Personal Portfolio", style: "text-purple" },
      { text: "📁 Project 2 - E-commerce Platform", style: "text-purple" },
    ],
    education: [
      {
        text: "🎓 B.S. in Computer Science, XYZ University",
        style: "text-orange",
      },
    ],
    experience: [
      {
        text: "💼 Frontend Developer @ ABC Corp (2021–Present)",
        style: "text-orange",
      },
    ],
    skills: [
      {
        text: "🧠 JavaScript, TypeScript, SolidJS, React, Tailwind, Node.js",
        style: "text-red",
      },
    ],
    resume: [
      {
        text: "📄 Download Resume: https://yourdomain.com/resume.pdf",
        style: "text-blue underline",
      },
    ],
    socials: [
      {
        text: "🐦 Twitter: https://twitter.com/yourhandle",
        style: "text-blue underline",
      },
      {
        text: "💼 LinkedIn: https://linkedin.com/in/yourhandle",
        style: "text-blue underline",
      },
    ],
  };
  function updateMirrorWidth() {
    setMirrorWidth(mirrorRef?.getBoundingClientRect().width ?? 0);
  }
  function handleCommandSubmit(e: KeyboardEvent) {
    const currentCmd = command().trim();

    // ENTER — run command
    if (e.key === "Enter") {
      if (!currentCmd) return;

      const output = commands[currentCmd.toLowerCase()] || [
        { text: `Command not found: ${currentCmd}`, style: "text-red" },
      ];

      setLines((prev) => [
        ...prev,
        { text: `> ${currentCmd}`, style: "text-foreground" },
        ...output,
      ]);

      setHistory((prev) => [...prev, currentCmd]);
      setHistoryIndex(null);
      setCommand("");
      updateMirrorWidth();
      e.preventDefault();
    }

    // UP ARROW — go back in history
    if (e.key === "ArrowUp") {
      const currentHistory = history();
      if (currentHistory.length === 0) return;

      setHistoryIndex((prev) => {
        const newIndex =
          prev === null ? currentHistory.length - 1 : Math.max(prev - 1, 0);
        setCommand(currentHistory[newIndex]);
        return newIndex;
      });

      e.preventDefault();
    }

    // DOWN ARROW — go forward in history
    if (e.key === "ArrowDown") {
      const currentHistory = history();
      if (currentHistory.length === 0) return;

      setHistoryIndex((prev) => {
        if (prev === null) return null;

        const newIndex = Math.min(prev + 1, currentHistory.length);
        if (newIndex === currentHistory.length) {
          setCommand("");
          return null;
        } else {
          setCommand(currentHistory[newIndex]);
          return newIndex;
        }
      });

      e.preventDefault();
    }

    // TAB — autocomplete
    if (e.key === "Tab") {
      e.preventDefault();

      const cmdList = Object.keys(commands);
      const matches = cmdList.filter((cmd) =>
        cmd.startsWith(currentCmd.toLowerCase())
      );

      if (matches.length === 1) {
        setCommand(matches[0]); // autocomplete exact match
      } else if (matches.length > 1) {
        // Show possible completions
        setLines((prev) => [
          ...prev,
          { text: `> ${currentCmd}`, style: "text-foreground" },
          { text: matches.join("    "), style: "text-yellow" },
        ]);
      }
    }
  }

  let mirrorRef: HTMLSpanElement | undefined;
  const [mirrorWidth, setMirrorWidth] = createSignal(0);
  const [isFocused, setIsFocused] = createSignal(true);

  onMount(() => {
    setMirrorWidth(mirrorRef?.getBoundingClientRect().width ?? 0);
    inputRef?.focus();
  });

  return (
    <div
      id="terminal"
      class=" text-foreground font-mono text-sm sm:text-base p-8 h-full overflow-scroll tracking-wide leading-relaxed "
      onClick={() => inputRef?.focus()}
    >
      <For each={lines()}>
        {(line) => (
          <div class={line.style ?? "text-foreground"}>{line.text}</div>
        )}
      </For>

      <div class="flex space-x-2 mt-2">
        <div>
          <span class="text-green">ilyes@portfolio:</span>
          <span class="text-green font-extrabold">~</span>
          <span class="text-red font-extrabold">$</span>
        </div>
        <div class="relative w-full">
          <span
            ref={mirrorRef!}
            class="invisible absolute whitespace-pre font-mono text-lg"
          >
            {command()}
          </span>
          <input
            ref={inputRef!}
            type="text"
            value={command()}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onInput={(e) => {
              setCommand(e.currentTarget.value);
              updateMirrorWidth();
            }}
            onKeyDown={handleCommandSubmit}
            class="bg-transparent border-none outline-none text-foreground w-full caret-transparent font-mono text-lg"
            autofocus
          />

          {/* todo: show cursor only when input is focued*/}
          {isFocused() && (
            <span
              class="terminal-cursor absolute top-[5px] h-[1.2em] w-[0.6ch] bg-green animate-pulse"
              style={{ left: mirrorWidth() + "px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
