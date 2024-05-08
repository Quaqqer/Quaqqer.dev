import ProjectTemplate from "@components/ProjectTemplate.tsx";
import Chip8Component from "@islands/projects/Chip8Component.tsx";

export default function Index() {
  const cellStyle = "text-gray-300 p-2 border border-collapse border-gray-100";
  const desc = (
    <>
      <p className="text-gray-400 my-2">
        Select a ROM (my favourite is Tetris), load it and start playing. CHIP-8
        uses a 4x4 pad for controls, the table below shows how keys are mapped
        on the keyboard. Since every game has different controls, you will have
        to discover them for yourself!
      </p>

      <div className="flex flex-row items-center space-x-4 justify-center my-6">
        <table>
          <tr>
            <td className={cellStyle}>1</td>
            <td className={cellStyle}>2</td>
            <td className={cellStyle}>3</td>
            <td className={cellStyle}>C</td>
          </tr>
          <tr>
            <td className={cellStyle}>4</td>
            <td className={cellStyle}>5</td>
            <td className={cellStyle}>6</td>
            <td className={cellStyle}>D</td>
          </tr>
          <tr>
            <td className={cellStyle}>7</td>
            <td className={cellStyle}>8</td>
            <td className={cellStyle}>0</td>
            <td className={cellStyle}>E</td>
          </tr>
          <tr>
            <td className={cellStyle}>A</td>
            <td className={cellStyle}>0</td>
            <td className={cellStyle}>B</td>
            <td className={cellStyle}>F</td>
          </tr>
        </table>

        <div className="text-gray-300 text-7xl">⇔</div>

        <table>
          <tr>
            <td className={cellStyle}>1</td>
            <td className={cellStyle}>2</td>
            <td className={cellStyle}>3</td>
            <td className={cellStyle}>4</td>
          </tr>
          <tr>
            <td className={cellStyle}>Q</td>
            <td className={cellStyle}>W</td>
            <td className={cellStyle}>E</td>
            <td className={cellStyle}>R</td>
          </tr>
          <tr>
            <td className={cellStyle}>A</td>
            <td className={cellStyle}>S</td>
            <td className={cellStyle}>D</td>
            <td className={cellStyle}>F</td>
          </tr>
          <tr>
            <td className={cellStyle}>Z</td>
            <td className={cellStyle}>X</td>
            <td className={cellStyle}>C</td>
            <td className={cellStyle}>V</td>
          </tr>
        </table>
      </div>

      <h3 className="text-xl text-gray-300 my-4">Description</h3>
      <p className="text-gray-400 text-md my-2">
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
