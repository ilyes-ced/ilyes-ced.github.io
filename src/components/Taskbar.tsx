export default function Taskbar() {
  return (
    <div class="bg-blue-500 h-10 flex flex-row">
      <button class="bg-red-400 h-full p-4 flex items-center min-w-fit">
        start
      </button>
      <div class="flex items-center w-full">
        <div class="flex items-center p-4 h-full w-20 bg-green-600 min-w-fit">
          app name
        </div>
      </div>
      <div class="bg-red-400 h-full p-4 flex items-center min-w-fit">
        yyyy-mm-dd hh:ss
      </div>
    </div>
  );
}
