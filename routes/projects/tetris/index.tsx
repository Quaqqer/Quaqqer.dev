import TetrisComponent from "@islands/projects/TetrisComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";

export default function Index() {
  const desc = (
    <>
      <p class="text-gray-400 my-2">
        Focus the canvas with the mouse and control the game with the keyboard.
        To move the tetromino, use the arrow keys and rotate it with z and x.
      </p>

      <h3 class="text-xl text-gray-300 my-4">Description</h3>
      <p class="text-gray-400 text-md my-2">
        A simple implementation of tetris in TypeScript. It was coded over a
        single night because I felt like programming something small and fun,
        and I ended up with Tetris.
      </p>

      <p class="text-gray-400 text-md my-2">
        A small little feature I implemented was wall kicking. Without wall
        kicking a tetromino is not always rotateable at the edges of the screen.
        I implemented the most basic version of wall kicking, the variant from
        "Tetris The Grand master". It tries in order, rotated, rotated moved to
        the right, rotated moved to the left. If any of these fail it will fail
        to rotate. More information about wall kicks can be found at{" "}
        <a href="https://tetris.fandom.com/wiki/TGM_Rotation">
          the tetris wiki
        </a>
        .
      </p>
    </>
  );

  return (
    <ProjectTemplate title="Tetris" description={desc}>
      <TetrisComponent />
    </ProjectTemplate>
  );
}
