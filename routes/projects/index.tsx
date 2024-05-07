type Project = {
  name: string;
  description: string;
  href: string;
  imageUrl: string;
  date: string;
};

const projects: Project[] = [
  {
    name: "Saft",
    description:
      "Saft is a modern, high-level programming language designed for simplicity, efficiency, and expressiveness. It draws inspiration from functional and imperative paradigms, aiming to provide a clean and intuitive syntax for developers",
    href: "/projects/saft",
    imageUrl: "/img/saft_article.jpg",
    date: "2024-05-07",
  },
  {
    name: "Saft2",
    description:
      "Saft is a modern, high-level programming language designed for simplicity, efficiency, and expressiveness. It draws inspiration from functional and imperative paradigms, aiming to provide a clean and intuitive syntax for developers",
    href: "/projects/saft",
    imageUrl: "",
    date: "2024-05-07",
  },
  {
    name: "Saft",
    description:
      "Saft is a modern, high-level programming language designed for simplicity, efficiency, and expressiveness. It draws inspiration from functional and imperative paradigms, aiming to provide a clean and intuitive syntax for developers",
    href: "/projects/saft",
    imageUrl: "/img/saft_article.jpg",
    date: "2024-05-07",
  },
];

export default function Page() {
  return (
    <div>
      <Example />
    </div>
  );
}

function Example() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              href={p.href}
              className="flex flex-col items-start justify-between group"
              key={i}
            >
              <img
                src={p.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-gray-200">
                    {p.name}
                  </h3>

                  <time dateTime={p.date} className="text-gray-500">
                    {p.date}
                  </time>
                </div>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400 group-hover:text-gray-300">
                  {p.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
