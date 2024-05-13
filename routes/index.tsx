import Markdown from "@components/Markdown.tsx";

const md = `
Welcome to my personal website!
I'm a passionate software engineering student from Sweden.
My curiosities include algorithms, compilers, emulation and more.

My current projects are my own personal language,
[Saft](https://github.com/Quaqqer/saft), mostly as a programming exercise
rather than any particular actual use cases. I'm also writing my own NES
emulator, [Nemu](https://github.com/Quaqqer/nemu). Head over to my
[projects](/projects) if you are curious about my other projects!
`;

export default function Home() {
  return (
    <>
      <div className="px-6 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl text-center">
            Quaqqer.dev
          </h2>

          <Markdown src={md} class="mt-20 lg:prose-xl mx-auto max-w-2xl" />
        </div>
      </div>
    </>
  );
}
