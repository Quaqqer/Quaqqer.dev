type Project = {
  name: string;
  description: string;
  href: string;
  imageUrl: string;
  date: string;
  github?: string;
};

const projects: Project[] = [
  {
    name: "Saft",
    description:
      "Saft is a modern, high-level programming language designed for simplicity, efficiency, and expressiveness. It draws inspiration from functional and imperative paradigms, aiming to provide a clean and intuitive syntax for developers",
    href: "/projects/saft",
    imageUrl: "/img/saft_article.jpeg",
    date: "2023-12-22 - now",
    github: "https://github.com/Quaqqer/saft",
  },
  {
    name: "Tetris",
    description: "The game of tetris coded up in a single evening",
    href: "/projects/tetris",
    imageUrl: "/img/tetris_article.jpeg",
    date: "2024-01-31",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/chip8",
  },
  {
    name: "Chip8",
    description:
      "A javascript implementation of a CHIP-8 emulator. CHIP-8 is an imaginary console, a popular introduction to the world of programming emulators",
    href: "/projects/chip8",
    imageUrl: "/img/chip8_article.jpeg",
    date: "2024-01-28",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/chip8",
  },
  {
    name: "Cinemraft",
    description:
      "A simple voxel world generation with 3d rendering for the browser using three.js",
    href: "/projects/cinemraft",
    imageUrl: "/img/cinemraft_article.jpeg",
    date: "2022-10-28",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/cinemraft",
  },
  {
    name: "Snake",
    description:
      "A simple implementation of the snake game, with a leaderboard",
    href: "/projects/snake",
    imageUrl: "/img/snake_article.jpeg",
    date: "",
    github:
      "https://github.com/Quaqqer/Quaqqer.dev/tree/trunk/lib/projects/snake",
  },
  {
    name: "Game of Life",
    description:
      "Conways game of life is popular cellular automata. I implemented it in some basic JavaScript for fun",
    href: "/projects/gol",
    imageUrl: "/img/gol_article.jpeg",
    date: "2022-05-18",
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

        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-start">
          {projects.map((p, i) => (
            <div
              class="flex flex-col items-start justify-between group"
              key={i}
            >
              <a href={p.href}>
                <img
                  src={p.imageUrl}
                  alt=""
                  class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </a>
              <div class="max-w-xl">
                <div class="mt-8 flex items-center gap-x-4 text-xs">
                  <a href={p.href}>
                    <h3 class="text-lg font-semibold text-gray-100 group-hover:text-gray-200">
                      {p.name}
                    </h3>
                  </a>

                  <div class="text-gray-500">{p.date}</div>
                </div>

                <a href={p.href}>
                  <p class="mt-5 text-sm leading-6 text-gray-400 group-hover:text-gray-300">
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
