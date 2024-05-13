import SnakeComponent from "@islands/projects/SnakeComponent.tsx";
import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Markdown from "@components/Markdown.tsx";

const md = `
Focus the canvas with the mouse and control the snake with the arrow
keys.

### Description

Snake in TypeScript! Once upon a time there was a leaderboard, but since
reimplementing my site I haven't fixed it.
`;

export default function Index() {
  return (
    <ProjectTemplate title="Snake" description={<Markdown src={md} />}>
      <SnakeComponent />
    </ProjectTemplate>
  );
}
