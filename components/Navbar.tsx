import clsx from "clsx";
import { GithubIcon } from "@lib/icons.tsx";

const navbarItems: [string, string][] = [
  ["Home", "/"],
  ["Projects", "/projects"],
];

export function Navbar({ currentHref }: { currentHref: string }) {
  return (
    <header class="bg-gray-900 mb-5">
      <div class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex h-16 items-center">
            <div class="px-3 py-2 text-md font-medium text-gray-200">
              Quaqqer.dev
            </div>

            {navbarItems.map(([name, href]) => {
              const current =
                href === "/"
                  ? currentHref === "/"
                  : currentHref.startsWith(href);

              return (
                <a
                  href={href}
                  class={clsx(
                    "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                    current && "bg-gray-900 text-white underline",
                  )}
                >
                  {name}
                </a>
              );
            })}
          </div>

          <a href="https://github.com/Quaqqer">
            <GithubIcon class="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
