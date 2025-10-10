import { createSignal, onMount, For, JSX } from "solid-js";
import { store } from "../../store";
import { AiFillGithub } from "solid-icons/ai";

interface TerminalLine {
  text: string;
  style?: string;
}

export default function Terminal() {
  let inputRef: HTMLInputElement | undefined;
  let terminalRef: HTMLDivElement | undefined;

  const [lines, setLines] = createSignal<JSX.Element[]>([
    <div class="text-green">Welcome to my portfolio terminal!</div>,
    <div class="text-yellow">
      Type '<span class="font-bold">help</span>' to see available commands.
    </div>,
  ]);

  const [command, setCommand] = createSignal("");
  const [history, setHistory] = createSignal<string[]>([]);
  const [historyIndex, setHistoryIndex] = createSignal<number | null>(null);

  const commands: Record<string, JSX.Element> = {
    help: (
      <div>
        <p class="text-blue font-bold">System commands:</p>
        <p class="text-foreground font-semibold">
          &emsp; help | h{" "}
          <span class="font-normal">- Display available commands</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; clear | cls{" "}
          <span class="font-normal">- Clear the terminal</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; neofetch | fetch{" "}
          <span class="font-normal">- Display information</span>
        </p>

        <p class="text-blue font-bold">Personal information commands:</p>
        <p class="text-foreground font-semibold">
          &emsp; whoami{" "}
          <span class="font-normal">- Display information about me</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; skills{" "}
          <span class="font-normal">- Display information about my skills</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; projects{" "}
          <span class="font-normal">- Display my previous projects</span>
        </p>

        <p class="text-blue font-bold">Socials:</p>

        <p class="text-foreground font-semibold">
          &emsp; Github{" "}
          <span class="font-normal">- Go to my github profile</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; LinkedIn{" "}
          <span class="font-normal">- Go to my linkedin profile</span>
        </p>
      </div>
    ),

    aboutme: <div>aboutme</div>,
    github: (
      <div class="flex items-center gap-2">
        <span>Redirecting you to:</span>
        <a
          class="underline text-blue flex items-center gap-2"
          href="https://github.com/ilyes-ced"
          target="_blank"
        >
          <AiFillGithub />
          <p>https://github.com/ilyes-ced</p>
        </a>
      </div>
    ),
    projects: (
      <div class="">
        <div class="">title</div>
        <div class="">Torrent client</div>
        <div class="">Productivity & Management App (WIP) </div>
        <div class="">Slack Clone</div>
        <div class="">ClickUp Clone</div>
        <div class="">Classic Games Collection</div>
        <div class="">Brainf*ck Interpreter</div>
        <div class="">Reddit Clone</div>
        <div class="">Java Multi-Client Chat App</div>
        <div class="">Blogs UI</div>
      </div>
    ),
    education: <div>education</div>,
    experience: <div>experience</div>,
    skills: <div>skills</div>,
    resume: <div>resume</div>,
    socials: <div>socials</div>,
    linkedin: (
      <a
        class="underline text-blue flex items-center gap-2"
        href="https://github.com/ilyes-ced"
        target="_blank"
      >
        <AiFillGithub />
        <p>linkedin url goes here</p>
      </a>
    ),
  };

  function scrollToBottom() {
    if (terminalRef) {
      terminalRef.scrollTop = terminalRef.scrollHeight;
    }
  }

  function updateMirrorWidth() {
    setMirrorWidth(mirrorRef?.getBoundingClientRect().width ?? 0);
  }
  function handleCommandSubmit(e: KeyboardEvent) {
    const currentCmd = command().trim();

    // ENTER — run command
    if (e.key === "Enter") {
      if (!currentCmd) return;

      const output = (() => {
        switch (currentCmd.toLowerCase()) {
          case "github":
            window.open(
              "https://github.com/ilyes-ced",
              "_blank",
              "noopener,noreferrer"
            );
            return commands["github"];
          case "gh":
            window.open(
              "https://github.com/ilyes-ced",
              "_blank",
              "noopener,noreferrer"
            );
            return commands["github"];
          case "linkedin":
            return commands["linkedin"];
          case "ln":
            return commands["linkedin"];
          case "help":
            return commands["help"];
          case "h":
            return commands["help"];
          case "projects":
            return commands["projects"];
          case "clear":
            // clear
            setLines([]);
            return;
          case "cls":
            // clear
            setLines([]);
            return;

          case "neofetch":
            return;
          case "fetch":
            return;

          default:
            return <div class="text-red">Command not found: {currentCmd}</div>;
        }
      })();

      // const output = commands[currentCmd.toLowerCase()] || [
      //   <div class="text-red">Command not found: {currentCmd}</div>,
      // ];

      setLines((prev) => [
        ...prev,
        <div class="text-foreground">&gt; {currentCmd}</div>,
        output,
      ]);

      setHistory((prev) => [...prev, currentCmd]);
      setHistoryIndex(null);
      setCommand("");
      updateMirrorWidth();
      scrollToBottom(); // <- scroll after setting lines
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
          <div class="text-foreground">&gt; {currentCmd}</div>,
          <div class="text-yellow">{matches.join("    ")}</div>,
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
      ref={terminalRef}
      class=" text-foreground font-mono text-sm sm:text-base p-8 h-full overflow-scroll tracking-wide leading-relaxed "
      onClick={() => inputRef?.focus()}
    >
      <For each={lines()}>{(line) => line}</For>

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
