import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Chip8Component from "@islands/projects/Chip8Component.tsx";

export default function Index() {
  const cellStyle = "text-gray-300 p-2 border border-collapse border-gray-100";
  const desc = (
    <>
      <p class="text-gray-400 my-2">
        Select a ROM (my favourite is Tetris), load it and start playing. CHIP-8
        uses a 4x4 pad for controls, the table below shows how keys are mapped
        on the keyboard. Since every game has different controls, you will have
        to discover them for yourself!
      </p>

      <div class="flex flex-row items-center space-x-4 justify-center my-6">
        <table>
          <tr>
            <td class={cellStyle}>1</td>
            <td class={cellStyle}>2</td>
            <td class={cellStyle}>3</td>
            <td class={cellStyle}>C</td>
          </tr>
          <tr>
            <td class={cellStyle}>4</td>
            <td class={cellStyle}>5</td>
            <td class={cellStyle}>6</td>
            <td class={cellStyle}>D</td>
          </tr>
          <tr>
            <td class={cellStyle}>7</td>
            <td class={cellStyle}>8</td>
            <td class={cellStyle}>0</td>
            <td class={cellStyle}>E</td>
          </tr>
          <tr>
            <td class={cellStyle}>A</td>
            <td class={cellStyle}>0</td>
            <td class={cellStyle}>B</td>
            <td class={cellStyle}>F</td>
          </tr>
        </table>

        <div class="text-gray-300 text-7xl">⇔</div>

        <table>
          <tr>
            <td class={cellStyle}>1</td>
            <td class={cellStyle}>2</td>
            <td class={cellStyle}>3</td>
            <td class={cellStyle}>4</td>
          </tr>
          <tr>
            <td class={cellStyle}>Q</td>
            <td class={cellStyle}>W</td>
            <td class={cellStyle}>E</td>
            <td class={cellStyle}>R</td>
          </tr>
          <tr>
            <td class={cellStyle}>A</td>
            <td class={cellStyle}>S</td>
            <td class={cellStyle}>D</td>
            <td class={cellStyle}>F</td>
          </tr>
          <tr>
            <td class={cellStyle}>Z</td>
            <td class={cellStyle}>X</td>
            <td class={cellStyle}>C</td>
            <td class={cellStyle}>V</td>
          </tr>
        </table>
      </div>

      <h3 class="text-xl text-gray-300 my-4">Description</h3>
      <p class="text-gray-400 text-md my-2">
        This is a basic CHIP-8 emulator implemented in JavaScript (or TypeScript
        rather). I followed{" "}
        <a href="https://tobiasvl.github.io/blog/write-a-chip-8-emulator/">
          a high level guide on CHIP-8 emulators
        </a>
        , since I already have some experience with emulators and I don't need
        step by step instructions.
      </p>
    </>
  );

  return (
    <ProjectTemplate title="CHIP-8" description={desc}>
      <Chip8Component />
    </ProjectTemplate>
  );
}
