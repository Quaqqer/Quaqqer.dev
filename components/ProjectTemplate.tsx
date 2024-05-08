import { ComponentChildren } from "preact";

export default function ProjectTemplate({
  title,
  children,
  description,
}: {
  title: string;
  children: ComponentChildren;
  description: ComponentChildren;
}) {
  return (
    <div class="mx-auto max-w-screen-lg mt-18">
      <div class="flex flex-col items-center">
        <h2 class="text-3xl text-gray-300 font-medium my-6">{title}</h2>

        {children}

        <div class="py-12 max-w-xl">{description}</div>
      </div>
    </div>
  );
}
