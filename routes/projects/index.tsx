import { GithubIcon, PlayCircleIcon } from "@lib/icons.tsx";
import clsx from "clsx";

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  date: string;
  href?: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    name: "Saft",
    description:
      "Saft is a modern, high-level programming language designed for simplicity, efficiency, and expressiveness. It draws inspiration from functional and imperative paradigms, aiming to provide a clean and intuitive syntax for developers",
    imageUrl: "/img/saft_article.jpeg",
    date: "2023-12-22 - now",
    href: "https://github.com/Quaqqer/saft",
    github: "https://github.com/Quaqqer/saft",
  },
  {
    name: "Advent of Code",
    description:
      "I have participated in Advent of Code since the year 2019. I'm one of those people who wake up at 6 am. to finish my puzzles as quickly as possible, before going back to sleep ;)",
    imageUrl: "/img/aoc_article.jpeg",
    date: "2019-12-01 - now",
    href: "https://github.com/Quaqqer/aoc",
    github: "https://github.com/Quaqqer/aoc",
  },
  {
    name: "Tetris",
    description: "The game of tetris coded up in a single evening",
    imageUrl: "/img/tetris_article.jpeg",
    date: "2024-01-31",
    href: "/projects/tetris",
    demo: "/projects/tetris",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/chip8",
  },
  {
    name: "CHIP-8 in JS",
    description: "A javascript implementation of a CHIP-8 emulator",
    imageUrl: "/img/chip8_article.jpeg",
    date: "2024-01-28",
    href: "/projects/chip8",
    demo: "/projects/chip8",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/chip8",
  },
  {
    name: "Nemu",
    description:
      "A nes emulator written in Rust. Currently only a CPU is implemented, I hope to finish it one day :)",
    imageUrl: "/img/nemu_article.jpeg",
    date: "2023-06-05 - ...",
    href: "https://github.com/Quaqqer/nemu",
    github: "https://github.com/Quaqqer/nemu",
  },
  {
    name: "CHIP-8 in Rust",
    description:
      "A CHIP-8 emulator written in rust. CHIP-8 is an imaginary console, a popular introduction to the world of programming emulators",
    imageUrl: "/img/chip8_rs_article.jpeg",
    date: "2023-06-04",
    href: "https://github.com/Quaqqer/chip8",
    github: "https://github.com/Quaqqer/chip8",
  },
  {
    name: "Cinemraft",
    description:
      "A simple voxel world generation with 3d rendering for the browser using three.js",
    imageUrl: "/img/cinemraft_article.jpeg",
    date: "2022-10-28",
    href: "/projects/cinemraft",
    demo: "/projects/cinemraft",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/cinemraft",
  },
  {
    name: "Snake",
    description:
      "A simple implementation of the snake game, with a leaderboard",
    imageUrl: "/img/snake_article.jpeg",
    date: "",
    href: "/projects/snake",
    demo: "/projects/snake",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/snake",
  },
  {
    name: "Game of Life",
    description:
      "Conways game of life is popular cellular automata. I implemented it in some basic JavaScript for fun",
    imageUrl: "/img/gol_article.jpeg",
    date: "2022-05-18",
    href: "/projects/gol",
    demo: "/projects/gol",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/gol",
  },
];

export default function Page() {
  return (
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Projects
          </h2>
        </div>

        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-start">
          {projects.map((p, i) => (
            <div
              class="flex flex-col items-stretch justify-between group"
              key={i}
            >
              <a href={p.href}>
                <img
                  src={p.imageUrl}
                  alt=""
                  class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </a>

              <div class="lg:px-2">
                <div class="mt-8 flex items-center justify-between">
                  <div class="flex items-center gap-x-4 text-xs">
                    <a href={p.href}>
                      <h3
                        class={clsx(
                          "text-lg font-semibold text-gray-100",
                          p.href !== undefined && "group-hover:text-gray-200",
                        )}
                      >
                        {p.name}
                      </h3>
                    </a>

                    <div class="text-gray-500">{p.date}</div>
                  </div>

                  <div class="flex items-center gap-x-4">
                    {p.demo !== undefined && (
                      <a href={p.demo}>
                        <PlayCircleIcon class="h-6 w-6 text-white" />
                      </a>
                    )}

                    {p.github !== undefined && (
                      <a href={p.github}>
                        <GithubIcon class="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <a href={p.href}>
                  <p
                    class={clsx(
                      "mt-5 text-sm leading-6 text-gray-400",
                      p.href !== undefined && "group-hover:text-gray-300",
                    )}
                  >
                    {p.description}
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
