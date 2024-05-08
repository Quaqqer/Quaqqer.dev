import GameOfLifeComponent from "@islands/projects/GameOfLifeComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";

export default function Index() {
  const desc = (
    <>
      <h3 class="text-xl text-gray-300 my-4">Description</h3>
      <p class="text-gray-400 text-md my-2">
        This is{" "}
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
          Conways Game of Life
        </a>
        , a cellular automaton. An interesting fact is that it is turing
        complete, and it can simulate itself.
      </p>
    </>
  );

  return (
    <ProjectTemplate title="Game of Life" description={desc}>
      <GameOfLifeComponent />
    </ProjectTemplate>
  );
}
