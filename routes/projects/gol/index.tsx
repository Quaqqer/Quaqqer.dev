import GameOfLifeComponent from "@islands/projects/GameOfLifeComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Markdown from "@components/Markdown.tsx";

const md = `
### Description

This is [Conways Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life),
a cellular automaton. An interesting fact about it is that it's turing
complete and can simulate itself. The rules for Conways Game of Life are
very simple.

- A cell dies by isolation if it has fewer than two neighbours
- A cell dies by overpopulation if it has more than three neigbhours
- A dead cell comes to life if it has exactly three neighbours
`;

export default function Index() {
  return (
    <ProjectTemplate title="Game of Life" description={<Markdown src={md} />}>
      <GameOfLifeComponent />
    </ProjectTemplate>
  );
}
