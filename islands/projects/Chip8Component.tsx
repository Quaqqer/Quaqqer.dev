import { StateUpdater, useCallback, useEffect, useState } from "preact/hooks";
import * as chip8 from "@lib/projects/chip8/chip8.ts";
import { assert } from "$std/assert/assert.ts";
import { Fragment } from "preact";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@lib/icons.tsx";

export default function Chip8Component() {
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const [selectedRom, setSelectedRom] = useState(roms[53]);
  const [rom, setRom] = useState<Uint8Array | undefined>();

  useEffect(() => {
    if (rom !== undefined && canvasRef !== null) {
      const emu = new chip8.Chip8(rom);
      const ctx = canvasRef.getContext("2d");
      assert(ctx !== null);

      const keyDownListener = (ev: KeyboardEvent) => {
        const action = chip8.keymap.get(ev.key);
        if (action !== undefined) {
          ev.preventDefault();
          emu.keyDown(action);
        }
      };

      const keyUpListener = (ev: KeyboardEvent) => {
        const action = chip8.keymap.get(ev.key);
        if (action !== undefined) {
          ev.preventDefault();
          emu.keyUp(action);
        }
      };

      canvasRef.addEventListener("keydown", keyDownListener);
      canvasRef.addEventListener("keyup", keyUpListener);

      const stopEmu = emu.init(ctx);

      return () => {
        stopEmu();
        canvasRef.removeEventListener("keydown", keyDownListener);
        canvasRef.removeEventListener("keyup", keyUpListener);
      };
    }
  }, [rom, canvasRef]);

  const loadRom = useCallback(async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const buf = await blob.arrayBuffer();
    const romData = new Uint8Array(buf);
    setRom(romData);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-5">
      <canvas
        ref={setCanvasRef}
        className="bg-black"
        tabIndex={1}
        width={chip8.SCREEN_W * chip8.PIXEL_SIZE}
        height={chip8.SCREEN_H * chip8.PIXEL_SIZE}
      />

      <div className="flex flex-row space-x-3 items-center">
        <RomSelector
          roms={roms}
          selected={selectedRom}
          setSelected={setSelectedRom}
        />

        <button
          className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={() => void loadRom(selectedRom.url)}
        >
          Load ROM
        </button>
      </div>
    </div>
  );
}

function RomSelector({
  roms,
  selected,
  setSelected,
}: {
  roms: Rom[];
  selected: Rom;
  setSelected: StateUpdater<Rom>;
}) {
  const [query, setQuery] = useState("");

  const filteredRoms =
    query === ""
      ? roms
      : roms.filter(({ name }) =>
          name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <div className="w-48">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-gray-700 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-black focus:ring-0 outline-none"
              displayValue={(rom: Rom) => rom.name}
              onChange={(event) => {
                setQuery((event.target as HTMLInputElement).value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="w-5 h-5 text-gray-600" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredRoms.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-400">
                  Nothing found.
                </div>
              ) : (
                filteredRoms.map((rom) => (
                  <Combobox.Option
                    key={rom.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 text-white ${
                        active && "bg-indigo-400 text-white"
                      }`
                    }
                    value={rom}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {rom.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

type Rom = { name: string; url: string };

const roms: Rom[] = [
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/15 Puzzle [Roger Ivie].ch8",
    name: "15 Puzzle",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Addition Problems [Paul C. Moews].ch8",
    name: "Addition Problems",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Airplane.ch8",
    name: "Airplane",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Animal Race [Brian Astle].ch8",
    name: "Animal Race",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Astro Dodge [Revival Studios, 2008].ch8",
    name: "Astro Dodge",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Biorhythm [Jef Winsor].ch8",
    name: "Biorhythm",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Blinky [Hans Christian Egeberg, 1991].ch8",
    name: "Blinky",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Blitz [David Winter].ch8",
    name: "Blitz",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Bowling [Gooitzen van der Wal].ch8",
    name: "Bowling",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Breakout [Carmelo Cortez, 1979].ch8",
    name: "Breakout",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Brick (Brix hack, 1990).ch8",
    name: "Brick",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Brix [Andreas Gustafsson, 1990].ch8",
    name: "Brix",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Cave.ch8",
    name: "Cave",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Coin Flipping [Carmelo Cortez, 1978].ch8",
    name: "Coin Flipping",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Connect 4 [David Winter].ch8",
    name: "Connect 4",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Craps [Camerlo Cortez, 1978].ch8",
    name: "Craps",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Deflection [John Fort].ch8",
    name: "Deflection",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Figures.ch8",
    name: "Figures",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Filter.ch8",
    name: "Filter",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Guess [David Winter].ch8",
    name: "Guess",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Hidden [David Winter, 1996].ch8",
    name: "Hidden",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Hi-Lo [Jef Winsor, 1978].ch8",
    name: "Hi-Lo",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Kaleidoscope [Joseph Weisbecker, 1978].ch8",
    name: "Kaleidoscope",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Landing.ch8",
    name: "Landing",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Lunar Lander (Udo Pernisz, 1979).ch8",
    name: "Lunar Lander",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Mastermind FourRow (Robert Lindley, 1978).ch8",
    name: "Mastermind FourRow",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Merlin [David Winter].ch8",
    name: "Merlin",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Missile [David Winter].ch8",
    name: "Missile",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Most Dangerous Game [Peter Maruhnic].ch8",
    name: "Most Dangerous Game",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Nim [Carmelo Cortez, 1978].ch8",
    name: "Nim",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Paddles.ch8",
    name: "Paddles",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Pong (1 player).ch8",
    name: "Pong",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Pong [Paul Vervalin, 1990].ch8",
    name: "Pong (Paul)",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Programmable Spacefighters [Jef Winsor].ch8",
    name: "Programmable Spacefighters",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Puzzle.ch8",
    name: "Puzzle",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Rocket [Joseph Weisbecker, 1978].ch8",
    name: "Rocket",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Rocket Launcher.ch8",
    name: "Rocket Launcher",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Rocket Launch [Jonas Lindstedt].ch8",
    name: "Rocket Launch",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Rush Hour [Hap, 2006].ch8",
    name: "Rush Hour",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Russian Roulette [Carmelo Cortez, 1978].ch8",
    name: "Russian Roulette",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Sequence Shoot [Joyce Weisbecker].ch8",
    name: "Sequence Shoot",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Slide [Joyce Weisbecker].ch8",
    name: "Slide",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Soccer.ch8",
    name: "Soccer",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Space Flight.ch8",
    name: "Space Flight",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Space Intercept [Joseph Weisbecker, 1978].ch8",
    name: "Space Intercept",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Space Invaders [David Winter].ch8",
    name: "Space Invaders",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Spooky Spot [Joseph Weisbecker, 1978].ch8",
    name: "Spooky Spot",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Squash [David Winter].ch8",
    name: "Squash",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Submarine [Carmelo Cortez, 1978].ch8",
    name: "Submarine",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Sum Fun [Joyce Weisbecker].ch8",
    name: "Sum Fun",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Syzygy [Roy Trevino, 1990].ch8",
    name: "Syzygy",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Tank.ch8",
    name: "Tank",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Tapeworm [JDR, 1999].ch8",
    name: "Tapeworm",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Tetris [Fran Dachille, 1991].ch8",
    name: "Tetris",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Tic-Tac-Toe [David Winter].ch8",
    name: "Tic-Tac-Toe",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Timebomb.ch8",
    name: "Timebomb",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Tron.ch8",
    name: "Tron",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/UFO [Lutz V, 1992].ch8",
    name: "UFO",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Vers [JMN, 1991].ch8",
    name: "Vers",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Vertical Brix [Paul Robson, 1996].ch8",
    name: "Vertical Brix",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Wall [David Winter].ch8",
    name: "Wall",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Wipe Off [Joseph Weisbecker].ch8",
    name: "Wipe Off",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/Worm V4 [RB-Revival Studios, 2007].ch8",
    name: "Worm V4",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/X-Mirror.ch8",
    name: "X-Mirror",
  },
  {
    url: "https://raw.githubusercontent.com/kripod/chip8-roms/master/games/ZeroPong [zeroZshadow, 2007].ch8",
    name: "ZeroPong",
  },
];
