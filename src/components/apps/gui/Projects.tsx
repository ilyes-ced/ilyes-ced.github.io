import { store } from "../../../store";

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

/**
 const Card = () => {
  return (
    <div class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full">
    <div class="text-3xl font-bold">title</div>
    <div class="text-sm font-light">subtitle</div>
    
    <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
    
    <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
*/

const TorrentCard = () => {
  return (
    <a
      href="https://github.com/ilyes-ced/torrent"
      target="_blank"
      class="border border-border p-4 hover:bg-border/30 transition-all duration-400 ease-in-out space-y-2 max-w-[400px] min-w-[300px] h-full"
    >
      <div class="text-3xl font-bold">{store.langTexts.torrentTitle}</div>
      <div class="text-sm font-light">{store.langTexts.torrentSubtitle}</div>

      <div class="">
        {store.langTexts.torrentDescription}
        <ul class="list-disc list-inside pl-4">
          <li>{store.langTexts.torrentFeatures0}</li>
          <li>{store.langTexts.torrentFeatures1}</li>
          <li>{store.langTexts.torrentFeatures2}</li>
          <li>{store.langTexts.torrentFeatures3}</li>
          <li>{store.langTexts.torrentFeatures4}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.milanoteTitle} </div>
      <div class="text-sm font-light">{store.langTexts.milanoteSubtitle}</div>

      <div class="text-sm leading-relaxed">
        {store.langTexts.milanoteDescription}
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>{store.langTexts.milanoteFeatures0}</li>
          <li>{store.langTexts.milanoteFeatures1}</li>
          <li>{store.langTexts.milanoteFeatures2}</li>
          <li>{store.langTexts.milanoteFeatures3}</li>
          <li>{store.langTexts.milanoteFeatures4}</li>
          <li>{store.langTexts.milanoteFeatures5} </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end text-sm">
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
      <div class="text-3xl font-bold">{store.langTexts.slackTitle}</div>
      <div class="text-sm font-light">{store.langTexts.slackSubtitle} </div>

      <div class="">
        {store.langTexts.slackDescription}
        <ul class="list-disc list-inside pl-4">
          <li>{store.langTexts.slackFeatures0} </li>
          <li>{store.langTexts.slackFeatures1} </li>
          <li>{store.langTexts.slackFeatures2} </li>
          <li>{store.langTexts.slackFeatures3} </li>
          <li>{store.langTexts.slackFeatures4} </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.clickupTitle}</div>
      <div class="text-sm font-light">{store.langTexts.clickupSubtitle}</div>

      <div class="">
        {store.langTexts.clickupDescription}
        <ul class="list-disc list-inside pl-4">
          <li>{store.langTexts.clickupFeatures4} </li>
          <li>{store.langTexts.clickupFeatures3} </li>
          <li>{store.langTexts.clickupFeatures2} </li>
          <li>{store.langTexts.clickupFeatures1} </li>
          <li>{store.langTexts.clickupFeatures0} </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.classicTitle}</div>
      <div class="text-sm font-light">{store.langTexts.classicSubtitle} </div>

      <div class="">
        {store.langTexts.classicDescription}
        <ul class="list-disc list-inside pl-4">
          <li>{store.langTexts.classicFeatures0} </li>
          <li>{store.langTexts.classicFeatures1}</li>
          <li>{store.langTexts.classicFeatures2} </li>
          <li>{store.langTexts.classicFeatures3}</li>
          <li>{store.langTexts.classicFeatures4} </li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.brainfuckTitle}</div>
      <div class="text-sm font-light">{store.langTexts.brainfuckSubtitle}</div>

      <div class="">
        {store.langTexts.brainfuckDescription}
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>{store.langTexts.brainfuckFeatures0} </li>
          <li>{store.langTexts.brainfuckFeatures1} </li>
          <li>{store.langTexts.brainfuckFeatures2}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.redditTitle}</div>
      <div class="text-sm font-light">{store.langTexts.redditSubtitle}</div>

      <div class="">
        {store.langTexts.redditDescription}
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>{store.langTexts.redditFeatures0}</li>
          <li>{store.langTexts.redditFeatures1}</li>
          <li>{store.langTexts.redditFeatures2}</li>
          <li>{store.langTexts.redditFeatures3}</li>
          <li>{store.langTexts.redditFeatures4}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.chatAppJavaTitle}</div>
      <div class="text-sm font-light">
        {store.langTexts.chatAppJavaSubtitle}
      </div>

      <div class="">
        {store.langTexts.chatAppJavaDescription}
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>{store.langTexts.chatAppJavaFeatures0}</li>
          <li>{store.langTexts.chatAppJavaFeatures1}</li>
          <li>{store.langTexts.chatAppJavaFeatures2}</li>
          <li>{store.langTexts.chatAppJavaFeatures3}</li>
          <li>{store.langTexts.chatAppJavaFeatures4}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
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
      <div class="text-3xl font-bold">{store.langTexts.blogsUITitle}</div>
      <div class="text-sm font-light">{store.langTexts.blogsUISubtitle}</div>

      <div class="">
        {store.langTexts.blogsUIDescription}
        <ul class="list-disc list-inside pl-4 mt-1">
          <li>{store.langTexts.blogsUIFeatures0}</li>
          <li>{store.langTexts.blogsUIFeatures1}</li>
          <li>{store.langTexts.blogsUIFeatures2}</li>
          <li>{store.langTexts.blogsUIFeatures3}</li>
          <li>{store.langTexts.blogsUIFeatures4}</li>
        </ul>
      </div>

      <div class="flex flex-wrap gap-x-2 gap-y-2 self-end">
        <div class="px-2 py-1 bg-blue text-white rounded">React</div>
        <div class="px-2 py-1 bg-green text-white rounded">TailwindCSS</div>
        <div class="px-2 py-1 bg-purple text-white rounded">Brutalist UI</div>
      </div>
    </a>
  );
};
