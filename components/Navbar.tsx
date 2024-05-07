import clsx from "clsx";

const navbarItems: [string, string][] = [
  ["Home", "/"],
  ["Projects", "/projects"],
];

export function Navbar({ currentHref }: { currentHref: string }) {
  return (
    <div className="bg-gray-900 mb-5">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {navbarItems.map(([name, href]) => {
            const current =
              href === "/" ? currentHref === "/" : currentHref.startsWith(href);

            return (
              <a
                href={href}
                className={clsx(
                  "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",
                  current && "bg-gray-900 text-white",
                )}
              >
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
