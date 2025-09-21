export default function Taskbar() {
  return (
    <div class="bg-[#ffffff10] h-10 flex flex-row backdrop-blur-md">
      <button class="bg-red-400 h-full p-4 flex items-center min-w-fit">
        start
      </button>
      <div class="flex items-center w-full">
        <div class="flex items-center p-4 h-full w-20 bg-green-600 min-w-fit">
          app name
        </div>
      </div>
      <div class="h-full text-xs text-foreground flex flex-col px-4 items-center justify-center min-w-fit">
        <div>hh:ss</div>
        <div>yyyy/mm/dd</div>
      </div>
    </div>
  );
}
