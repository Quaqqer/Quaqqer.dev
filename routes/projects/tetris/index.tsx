import TetrisComponent from "@islands/projects/TetrisComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";

export default function Index() {
  const desc = (
    <>
      <p className="text-gray-400 my-2">
        Focus the canvas with the mouse and control the game with the keyboard.
        To move the tetromino, use the arrow keys and rotate it with z and x.
      </p>

      <h3 className="text-xl text-gray-300 my-4">Description</h3>
      <p className="text-gray-400 text-md my-2">
        A simple implementation of tetris in TypeScript. It was coded over a
        single night because I felt like programming something small and fun,
        and I ended up with Tetris.
      </p>

      <p className="text-gray-400 text-md my-2">
        A small little feature I implemented was wall kicking. Without wall
        kicking a tetromino is not always rotateable at the edges of the screen.
        The version I implemented was a very basic version of wall kicking where
        it first tries to rotate without kicking, if it fails it moves it to the
        right, if that fails to it moves it to the left instead. If all fail the
        rotation fails.
      </p>
    </>
  );

  return (
    <ProjectTemplate title="Tetris" description={desc}>
      <TetrisComponent />
    </ProjectTemplate>
  );
}
