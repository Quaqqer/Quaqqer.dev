import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Chip8Component from "@islands/projects/Chip8Component.tsx";
import { dedent } from "@qnighy/dedent";
import Markdown from "@components/Markdown.tsx";

export default function Index() {
  const cellStyle = "text-gray-300 p-2 border border-collapse border-gray-100";
  const md = `
Select a ROM and start playing! My personal favorite is Tetris. :)

CHIP-8 uses a 4x4 pad for controls, the tables below show how keys are mapped on
the keyboard. Since every game has different controls, you will have to discover
them for yourself.

<div class="flex flex-row items-center space-x-4 justify-center my-6 leading-none">
  <table>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>C</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>D</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>0</td>
      <td>E</td>
    </tr>
    <tr>
      <td>A</td>
      <td>0</td>
      <td>B</td>
      <td>F</td>
    </tr>
  </table>

  <div class="text-gray-300 text-3xl">⇔</div>

  <table>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Q</td>
      <td>W</td>
      <td>E</td>
      <td>R</td>
    </tr>
    <tr>
      <td>A</td>
      <td>S</td>
      <td>D</td>
      <td>F</td>
    </tr>
    <tr>
      <td>Z</td>
      <td>X</td>
      <td>C</td>
      <td>V</td>
    </tr>
  </table>
</div>

### Description

This is a basic CHIP-8 emulator implemented in JavaScript (or TypeScript
rather). I followed a [high-level guide](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/)
which was a good middle-ground between challenging and fun. 
`;
  return (
    <ProjectTemplate title="CHIP-8" description={<Markdown src={md} unsafe />}>
      <Chip8Component />
    </ProjectTemplate>
  );
}
