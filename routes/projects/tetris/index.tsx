import TetrisComponent from "@islands/projects/TetrisComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Markdown from "@components/Markdown.tsx";

const md = `
Focus the canvas with the mouse and control the game with the keyboard.
To move the tetromino, use the arrow keys and rotate it with z and x.

### Description

A simple implementation of tetris in TypeScript. It was coded over a
single night because I felt like programming something small and fun,
and I ended up with Tetris.

A small little feature I implemented was wall kicking. Without wall
kicking a tetromino is not always rotateable at the edges of the screen.
I implemented the most basic version of wall kicking, the variant from
"Tetris The Grand master". It tries in order, rotated, rotated moved to
the right, rotated moved to the left. If any of these fail it will fail
to rotate. More information about wall kicks can be found at
[the tetris wiki](https://tetris.fandom.com/wiki/TGM_Rotation).
`;

export default function Index() {
  return (
    <ProjectTemplate title="Tetris" description={<Markdown src={md} />}>
      <TetrisComponent />
    </ProjectTemplate>
  );
}
