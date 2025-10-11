export default function () {
  return <Grid />;
}
// make them clickabee to send to the url of the projects in github

const Grid = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        <TorrentCard />
        <MilanoteCard />
        <SlackCloneCard />
        <ClickUpCloneCard />
        <ClassicGamesCard />
        <BrainfuckCard />
        <RedditCloneCard />
        <ChatAppJavaCard />
        <BlogsUICard />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full">
      <div class="text-3xl font-bold">title</div>
      <div class="text-sm font-light">subtitle</div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>

      <div class="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos est
        consequuntur sunt eius similique consectetur itaque ipsa nam velit,
        voluptatem provident. Consectetur earum placeat perferendis tempore
        voluptate minima error illo!
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red rounded">lorem</div>
        <div class="px-2 py-1 bg-green rounded">lorem</div>
        <div class="px-2 py-1 bg-orange rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-blue rounded">lorem ipsum</div>
        <div class="px-2 py-1 bg-yellow rounded">lorem</div>
        <div class="px-2 py-1 bg-purple rounded">lorem</div>
      </div>
    </div>
  );
};

const TorrentCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/torrent"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Torrent client</div>
      <div class="text-sm font-light">Torrent client implemented in Rust</div>

      <div class="">
        A fully custom BitTorrent client built from scratch in Rust, focused on
        performance, reliability, and learning how the BitTorrent protocol works
        under the hood.
        <ul class="list-disc list-inside pl-4">
          <li> Bencode decoder and .torrent file parser</li>
          <li> Peer discovery and connection handling</li>
          <li> Piece downloading and file assembly</li>
          <li> Download resumption after interruption</li>
          <li> TUI (Terminal UI) for real-time download status</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-orange rounded">Rust</div>
        <div class="px-2 py-1 bg-red rounded">Tokio</div>
        <div class="px-2 py-1 bg-green rounded">Network</div>
        <div class="px-2 py-1 bg-purple rounded">Multithreaded</div>
      </div>
    </a>
  );
};

const MilanoteCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/graphNote"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Productivity & Management App (WIP) </div>
      <div class="text-sm font-light">
        A customizable productivity and organization tool inspired by Milanote,
        Miro, and Kinopio.
      </div>

      <div class="text-sm leading-relaxed">
        Built from the ground up as a desktop app, this tool allows users to
        visually organize their thoughts, tasks, and projects using a
        drag-and-drop canvas. Key features include:
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>Drag-and-drop node-based layout</li>
          <li>Nesting nodes within columns and boards</li>
          <li>Customizable node styles and themes</li>
          <li>
            Supports a variety of node types: checklists, rich text notes,
            images, links, and more.
          </li>
          <li>
            Plans for additional node types (e.g., media, Activity trackers,
            embeds)
          </li>
          <li>
            Future roadmap includes encryption and advanced security features
          </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 text-sm">
        <div class="px-2 py-1 bg-yellow rounded">Tauri</div>
        <div class="px-2 py-1 bg-blue rounded">SolidJS</div>
        <div class="px-2 py-1 bg-orange rounded">Rust</div>
        <div class="px-2 py-1 bg-purple rounded">Desktop App</div>
      </div>
    </a>
  );
};

const SlackCloneCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/slack_clone"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Slack Clone</div>
      <div class="text-sm font-light">
        A real-time team chat app built with modern web tech
      </div>

      <div class="">
        A communication platform inspired by Slack, designed for teams and
        collaboration. Includes real-time messaging, channels, and workspace
        management.
        <ul class="list-disc list-inside pl-4">
          <li>Workspace & channel creation (public/private)</li>
          <li>Real-time messaging with Socket.io</li>
          <li>Rich text editor for chat input</li>
          <li>User auth and session management</li>
          <li>Dark/light mode toggle</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-blue rounded">React</div>
        <div class="px-2 py-1 bg-green text-white rounded">Node.js</div>
        <div class="px-2 py-1 bg-background rounded">Express</div>
        <div class="px-2 py-1 bg-yellow text-white rounded">Socket.io</div>
        <div class="px-2 py-1 bg-red text-white rounded">MySQL</div>
        <div class="px-2 py-1 bg-purple rounded">Full Stack</div>
      </div>
    </a>
  );
};
const ClickUpCloneCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/clickup_clone"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">ClickUp Clone</div>
      <div class="text-sm font-light">
        Project & task management platform built from scratch
      </div>

      <div class="">
        A productivity and collaboration tool inspired by ClickUp, designed to
        streamline task tracking, teamwork, and project organization.
        <ul class="list-disc list-inside pl-4">
          <li>Create, assign & manage tasks</li>
          <li>Task statuses, priorities, and due dates</li>
          <li>Boards, lists, and calendar views</li>
          <li>Comments, attachments, and team collaboration</li>
          <li>User authentication, profiles, permissions</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-yellow rounded">JavaScript</div>
        <div class="px-2 py-1 bg-background rounded">Express</div>
        <div class="px-2 py-1 bg-red rounded">EJS</div>
        <div class="px-2 py-1 bg-blue rounded">tailwind</div>
      </div>
    </a>
  );
};

const ClassicGamesCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/classic_games"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Classic Games Collection</div>
      <div class="text-sm font-light">
        A collection of classic games built from scratch
      </div>

      <div class="">
        A set of timeless games from the early days of using the computer
        re‑implemented in modern web technologies.
        <ul class="list-disc list-inside pl-4">
          <li>
            Classic games like minesweeper, breakout and solitaire (and more)
          </li>
          <li>Pure logic for game loops, collision detection, scoring</li>
          <li>Responsive controls and game pacing</li>
          <li>State management and rendering from scratch</li>
          <li>Designed for learning fundamental game dev concepts</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-red text-white rounded">Svelte</div>
        <div class="px-2 py-1 bg-blue rounded">typescript</div>
        <div class="px-2 py-1 bg-purple rounded">Game</div>
      </div>
    </a>
  );
};

const BrainfuckCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/brainfuck"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Brainf*ck Interpreter</div>
      <div class="text-sm font-light">
        A minimal Brainf*ck language interpreter written in C
      </div>

      <div class="">
        A lightweight and efficient interpreter for the esoteric Brainf*ck
        programming language, written from scratch in C.
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>Parses and executes Brainf*ck commands</li>
          <li>Memory tape and pointer simulation</li>
          <li>Simple CLI interface</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-background text-white rounded">C</div>
        <div class="px-2 py-1 bg-green text-white rounded">CLI</div>
        <div class="px-2 py-1 bg-blue text-white rounded">Interpreter</div>
        <div class="px-2 py-1 bg-red text-white rounded">Low-level</div>
      </div>
    </a>
  );
};

const RedditCloneCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/reddit"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Reddit Clone</div>
      <div class="text-sm font-light">
        A full-stack Reddit clone with modern web technologies
      </div>

      <div class="">
        A feature-rich Reddit clone replicating core functionalities using
        modern web technologies.
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>Community creation and management</li>
          <li>Post creation, editing, and deletion</li>
          <li>Commenting with nested threads</li>
          <li>Upvoting and downvoting posts and comments</li>
          <li>User authentication and profile management</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-blue rounded">React</div>
        <div class="px-2 py-1 bg-green rounded">Node.js</div>
        <div class="px-2 py-1 bg-yellow rounded">JWT Auth</div>
        <div class="px-2 py-1 bg-green rounded">MongoDB</div>
        <div class="px-2 py-1 bg-purple rounded">Full Stack</div>
      </div>
    </a>
  );
};

const ChatAppJavaCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/chat_app_java"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Java Multi-Client Chat App</div>
      <div class="text-sm font-light">
        A real-time chat application built with JavaFX and MySQL
      </div>

      <div class="">
        A desktop chat application supporting multiple clients, featuring
        real-time messaging and a MySQL database backend.
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>User authentication (login/registration)</li>
          <li>Real-time messaging between clients</li>
          <li>Message history stored in MySQL database</li>
          <li>Active user list with status updates</li>
          <li>Logout functionality</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-orange rounded">Java</div>
        <div class="px-2 py-1 bg-blue rounded">JavaFX</div>
        <div class="px-2 py-1 bg-yellow rounded">MySQL</div>
        <div class="px-2 py-1 bg-green rounded">Maven</div>
        <div class="px-2 py-1 bg-purple rounded">Desktop App</div>
      </div>
    </a>
  );
};

const BlogsUICard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/blogs_ui"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">Blogs UI</div>
      <div class="text-sm font-light">
        A minimal blog interface showcasing a brutalist UI design
      </div>

      <div class="">
        A simple and clean blog interface built with React, Vite, and
        TailwindCSS, perfect for showcasing blog posts in a responsive and
        modern UI.
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>Clean and minimal blog layout</li>
          <li>Component-based architecture with reusable UI elements</li>
          <li>Styled with TailwindCSS for fast and responsive design</li>
          <li>Fast development with Vite and hot module replacement</li>
          <li>Responsive design for desktop and mobile devices</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <div class="px-2 py-1 bg-blue text-white rounded">React</div>
        <div class="px-2 py-1 bg-green text-white rounded">TailwindCSS</div>
        <div class="px-2 py-1 bg-purple text-white rounded">Brutalist UI</div>
      </div>
    </a>
  );
};
