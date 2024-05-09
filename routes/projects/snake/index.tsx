import SnakeComponent from "@islands/projects/SnakeComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";

export default function Index() {
  const desc = (
    <>
      <p class="text-gray-400 my-2">
        Focus the canvas with the mouse and control the snake with the arrow
        keys.
      </p>

      <h3 class="text-xl text-gray-300 my-4">Description</h3>
      <p class="text-gray-400 text-md my-2">
        Snake in TypeScript! Once upon a time there was a leaderboard, but since
        reimplementing my site I haven't fixed it.
      </p>
    </>
  );

  return (
    <ProjectTemplate title="Snake" description={desc}>
      <SnakeComponent />
    </ProjectTemplate>
  );
}
