import { useEffect, useState } from "preact/hooks";
import * as tetris from "@lib/projects/tetris/tetris.ts";
import { assert } from "$std/assert/assert.ts";

export default function TetrisComponent() {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef === null) return;

    const ctx = canvasRef.getContext("2d");
    assert(ctx !== null);

    const game = new tetris.Tetris();

    const stopper = game.init(canvasRef, ctx);

    return stopper;
  }, [canvasRef]);

  return <canvas width="200" height="480" tabindex={1} ref={setCanvasRef} />;
}
