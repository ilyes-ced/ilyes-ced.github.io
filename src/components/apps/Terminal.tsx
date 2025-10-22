import { createSignal, onMount, For, JSX } from "solid-js";
import { store } from "../../store";
import { AiFillGithub } from "solid-icons/ai";
import { AiOutlineCaretRight } from "solid-icons/ai";

interface TerminalLine {
  text: string;
  style?: string;
}

export default function Terminal() {
  let inputRef: HTMLInputElement | undefined;
  let terminalRef: HTMLDivElement | undefined;

  const [lines, setLines] = createSignal<JSX.Element[]>([
    <div class="text-green">{store.langTexts.welcomeTerm}!</div>,
    <div class="text-yellow">
      {store.langTexts.type} '
      <span class="font-bold">{store.langTexts.help}</span>'{" "}
      {store.langTexts.seeCommands}
    </div>,
    <br />,
  ]);

  const [command, setCommand] = createSignal("");
  const [history, setHistory] = createSignal<string[]>([]);
  const [historyIndex, setHistoryIndex] = createSignal<number | null>(null);

  const projects = [
    {
      name: store.langTexts.torrentTitle,
      url: "https://github.com/ilyes-ced/torrent",
      description: store.langTexts.torrentDescriptionShort,
    },
    {
      name: store.langTexts.milanoteTitle,
      url: "https://github.com/ilyes-ced/graphnote",
      description: store.langTexts.milanoteDescriptionShort,
    },
    {
      name: store.langTexts.slackTitle,
      url: "https://github.com/ilyes-ced/slack_clone",
      description: store.langTexts.slackDescriptionShort,
    },
    {
      name: store.langTexts.clickupTitle,
      url: "https://github.com/ilyes-ced/clickup_clone",
      description: store.langTexts.clickupDescriptionShort,
    },
    {
      name: store.langTexts.classicTitle,
      url: "https://github.com/ilyes-ced/classic_games",
      description: store.langTexts.classicDescriptionShort,
    },
    {
      name: store.langTexts.brainfuckTitle,
      url: "https://github.com/ilyes-ced/brainfuck",
      description: store.langTexts.brainfuckDescriptionShort,
    },
    {
      name: store.langTexts.redditTitle,
      url: "https://github.com/ilyes-ced/reddit",
      description: store.langTexts.redditDescriptionShort,
    },
    {
      name: store.langTexts.chatAppJavaTitle,
      url: "https://github.com/ilyes-ced/chat_app_java",
      description: store.langTexts.chatAppJavaDescriptionShort,
    },
    {
      name: store.langTexts.blogsUITitle,
      url: "https://github.com/ilyes-ced/chat_app_java",
      description: store.langTexts.blogsUIDescriptionShort,
    },
  ];

  const Prompt = () => {
    return (
      <div class="flex h-fit">
        <div>
          <div class="w-0 h-0 border-t-[0.625rem] border-t-transparent border-b-[0px] border-b-transparent border-l-[1rem] border-l-green bg-transparent rotate-180"></div>
          <div class="w-0 h-0 border-t-[0px] border-t-transparent border-b-[0.625rem] border-b-transparent border-l-[1rem] border-l-green bg-transparent rotate-180"></div>
        </div>
        <span class="px-2 bg-green text-background font-extrabold h-[1.25rem]">
          ilyes
        </span>
        <div class="w-0 h-0 border-t-[0.625rem] border-t-transparent border-b-[0.625rem] border-b-transparent border-l-[1rem] border-l-green bg-blue"></div>
        <span class="px-2 bg-blue text-background font-extrabold h-[1.25rem]">
          ~
        </span>
        <div class="w-0 h-0 border-t-[0.625rem] border-t-transparent border-b-[0.625rem] border-b-transparent border-l-[1rem] border-l-blue bg-yellow"></div>
        <span class="px-2 bg-yellow text-background font-extrabold h-[1.25rem]">
          $
        </span>
        <div class="w-0 h-0 border-t-[0.625rem] border-t-transparent border-b-[0.625rem] border-b-transparent border-l-[1rem] border-l-yellow bg-transparent"></div>
      </div>
    );
  };

  const commands: Record<string, () => JSX.Element> = {
    help: () => (
      <div>
        <p class="text-blue font-bold">{store.langTexts.systemCommand}:</p>
        <p class="text-foreground font-semibold">
          &emsp; help | h{" "}
          <span class="font-normal">- {store.langTexts.helpCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; clear | cls{" "}
          <span class="font-normal">- {store.langTexts.clearCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; neofetch | fetch{" "}
          <span class="font-normal">- {store.langTexts.neofetchCommand}</span>
        </p>

        <p class="text-blue font-bold">{store.langTexts.personalCommand}:</p>
        <p class="text-foreground font-semibold">
          &emsp; whoami{" "}
          <span class="font-normal">- {store.langTexts.whoamiCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; skills{" "}
          <span class="font-normal">- {store.langTexts.skillsCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; projects{" "}
          <span class="font-normal">- {store.langTexts.projectsCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; resume{" "}
          <span class="font-normal">- {store.langTexts.resumeCommand}</span>
        </p>

        <p class="text-blue font-bold">{store.langTexts.socialsCommand}:</p>

        <p class="text-foreground font-semibold">
          &emsp; github | gh{" "}
          <span class="font-normal">- {store.langTexts.githubCommand}</span>
        </p>
        <p class="text-foreground font-semibold">
          &emsp; linkedin | ln{" "}
          <span class="font-normal">- {store.langTexts.linkedinCommand}</span>
        </p>
      </div>
    ),

    aboutme: () => <div>aboutme</div>,
    github: () => (
      <div class="flex items-center gap-2">
        <span>{store.langTexts.redirecting}:</span>
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
    projects: () => (
      <>
        <br />
        <table class="min-w-full text-left text-sm border-collapse border border-gray-700">
          <thead>
            <tr class="">
              <th class="border border-white px-4 py-2">
                {store.langTexts.project}
              </th>
              <th class="border border-white px-4 py-2">
                {store.langTexts.description}
              </th>
            </tr>
          </thead>
          <tbody>
            <For each={projects}>
              {(project) => (
                <tr class="">
                  <td class="border border-white px-4 py-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="font-bold underline text-blue hover:text-orange"
                    >
                      {project.name}
                    </a>
                  </td>
                  <td class="border border-white px-4 py-2 text-foreground">
                    {project.description}
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </>
    ),
    skills: () => <div>{store.langTexts.skills}</div>,
    whoami: () => (
      <div>
        {" "}
        <p class="text-lg">{store.langTexts.whoami1}</p>
        <p class="text-lg mt-2">{store.langTexts.whoami2}</p>
      </div>
    ),
    resume: () => <div>{store.langTexts.resume}</div>,
    linkedin: () => (
      <a
        class="underline text-blue flex items-center gap-2"
        href="https://github.com/ilyes-ced"
        target="_blank"
      >
        <AiFillGithub />
        <p>linkedin url goes here</p>
      </a>
    ),
    neofetch: () => (
      <div>
        <pre>
          -@ .##@ .####@ @#####@ . *######@ .##@o@#####@ /############@
          /##############@ @######@**%######@ @######` %#####o @######@ ######%
          -@#######h ######@.` /#####h**`` `**%@####@ @H@*` `*%#@ *` `*
        </pre>
      </div>
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
      //if (!currentCmd) return;

      const output = (() => {
        switch (currentCmd.toLowerCase()) {
          case "github":
            window.open(
              "https://github.com/ilyes-ced",
              "_blank",
              "noopener,noreferrer"
            );
            return commands["github"]?.();
          case "gh":
            window.open(
              "https://github.com/ilyes-ced",
              "_blank",
              "noopener,noreferrer"
            );
            return commands["github"]?.();

          case "linkedin":
            return commands["linkedin"]?.();
          case "ln":
            return commands["linkedin"]?.();

          case "help":
            return commands["help"]?.();
          case "h":
            return commands["help"]?.();

          case "projects":
            return commands["projects"]?.();
          case "skills":
            return commands["skills"]?.();

          case "clear":
            setLines([]);
            return;
          case "cls":
            setLines([]);
            return;

          case "neofetch":
            return commands["neofetch"]?.();
          case "fetch":
            return commands["neofetch"]?.();

          case "whoami":
            return commands["whoami"]?.();
          case "resume":
            // download the resume here
            return commands["resume"]?.();

          case "":
            return;

          default:
            return (
              <>
                <div class="text-red font-bold">
                  {store.langTexts.commandNotFound}: {currentCmd}
                </div>
                <div class="text-yellow">
                  {store.langTexts.type} '
                  <span class="font-bold">{store.langTexts.help}</span>'{" "}
                  {store.langTexts.seeCommands}
                </div>
              </>
            );
        }
      })();

      // const output = commands[currentCmd.toLowerCase()] || [
      //   <div class="text-red">Command not found: {currentCmd}</div>,
      // ];

      setLines((prev) => [
        ...prev,
        <div class="text-foreground">
          <div class="flex space-x-2">
            <Prompt /> <span class="text-lg">{currentCmd}</span>
          </div>
        </div>,
        output,
        <br />,
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
      class=" text-foreground font-mono text-sm sm:text-base p-8 h-full overflow-scroll tracking-wide leading-relaxed"
      onClick={() => inputRef?.focus()}
    >
      <For each={lines()}>{(line) => line}</For>

      <div class="flex space-x-2">
        {/* traditional bash prompt
        <div>
          <span class="text-green">ilyes@portfolio:</span>
          <span class="text-green font-extrabold">~</span>
          <span class="text-red font-extrabold">$</span>
        </div>
          */}

        <Prompt />

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
            class="bg-transparent border-none outline-none text-foreground w-full caret-transparent font-mono text-lg "
            autofocus
          />

          {/* todo: show cursor only when input is focued*/}
          {isFocused() && (
            <span
              class="terminal-cursor absolute top-[0px] h-[1.2em] w-[0.6ch] bg-green animate-pulse"
              style={{ left: mirrorWidth() + "px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
