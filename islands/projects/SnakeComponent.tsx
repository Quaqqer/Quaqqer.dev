import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import { JSX } from "preact";
import { Game } from "@lib/projects/snake/index.ts";
import { assert } from "$std/assert/assert.ts";
import * as snakeRenderer from "@lib/projects/snake/renderer.ts";

export default function SnakeComponent(): JSX.Element {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const endGame = useCallback((score: number) => {}, []);

  const snake = useMemo(() => new Game(endGame), []);

  useEffect(() => {
    if (canvasRef !== null) {
      const ctx = canvasRef.getContext("2d");

      assert(ctx !== null);

      const stopper = snake.run(ctx, canvasRef);
      return stopper;
    }
  }, [canvasRef, snake]);

  return (
    <canvas
      ref={setCanvasRef}
      tabIndex={1}
      width={snakeRenderer.TILES_H * snakeRenderer.TILE_SIZE}
      height={snakeRenderer.TILES_V * snakeRenderer.TILE_SIZE}
    />
  );
}
