import { createSignal, onCleanup, onMount } from "solid-js";

const ROWS = 20;
const COLS = 10;

// Define a basic tetromino
const tetromino = {
  shape: [[1, 1, 1, 1]],
  color: "bg-blue-500",
};

function App() {
  const [grid, setGrid] = createSignal(createEmptyGrid());
  const [position, setPosition] = createSignal({ row: 0, col: 3 });

  function createEmptyGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  function drawTetromino() {
    const newGrid = createEmptyGrid();
    const { row, col } = position();
    tetromino.shape.forEach((r, y) => {
      r.forEach((cell, x) => {
        if (cell && row + y < ROWS && col + x < COLS) {
          newGrid[row + y][col + x] = 1;
        }
      });
    });
    setGrid(newGrid);
  }

  function moveDown() {
    setPosition((p) => {
      if (p.row + 1 < ROWS - 1) return { ...p, row: p.row + 1 };
      return p;
    });
  }

  function moveLeft() {
    setPosition((p) => ({ ...p, col: Math.max(0, p.col - 1) }));
  }

  function moveRight() {
    setPosition((p) => ({ ...p, col: Math.min(COLS - 4, p.col + 1) }));
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown") moveDown();
    if (e.key === "ArrowLeft") moveLeft();
    if (e.key === "ArrowRight") moveRight();
    drawTetromino();
  }

  onMount(() => {
    drawTetromino();
    window.addEventListener("keydown", handleKey);
    const interval = setInterval(() => {
      moveDown();
      drawTetromino();
    }, 1000);
    onCleanup(() => {
      window.removeEventListener("keydown", handleKey);
      clearInterval(interval);
    });
  });

  return (
    <div class="flex justify-center items-center h-screen bg-gray-900">
      <div class="grid grid-cols-10 gap-[1px] bg-gray-700">
        {grid()
          .flat()
          .map((cell, i) => (
            <div
              class={`w-6 h-6 ${cell ? tetromino.color : "bg-gray-800"}`}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default App;
