import { JSX } from "preact";
import { useEffect, useMemo, useState } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Game } from "@lib/projects/gol/index.ts";
import { assert } from "$std/assert/assert.ts";
import Button from "@components/Button.tsx";
import { darkTheme } from "@lib/projects/gol/theme.ts";

export default function GameOfLifeComponent(): JSX.Element {
  const paused = useSignal(false);

  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

  const gol = useMemo(() => new Game(25, 25), []);

  useEffect(() => {
    if (canvasRef === null) return;

    const ctx = canvasRef.getContext("2d");
    assert(ctx !== null);

    gol.render(ctx, darkTheme);

    const interval = setInterval(() => {
      if (!paused.value) {
        gol.tick();
        gol.render(ctx, darkTheme);
      }
    }, 1000);

    return () => void clearInterval(interval);
  }, [gol, canvasRef]);

  return (
    <div>
      <canvas ref={setCanvasRef} width="500" height="500" />
      <div class="flex flex-row space-x-3 justify-center mt-4">
        <Button
          sz="lg"
          variant="secondary"
          onClick={() => (paused.value = !paused.peek())}
        >
          {paused.value ? "Resume" : "Pause"}
        </Button>

        <Button
          sz="lg"
          variant="secondary"
          onClick={() => {
            gol.tick();
            const ctx = canvasRef?.getContext("2d");
            if (ctx) gol.render(ctx, darkTheme);
          }}
        >
          Tick
        </Button>

        <Button
          sz="lg"
          variant="secondary"
          onClick={() => {
            gol.randomize();
            const ctx = canvasRef?.getContext("2d");
            if (ctx) gol.render(ctx, darkTheme);
          }}
        >
          Randomize
        </Button>
      </div>
    </div>
  );
}
