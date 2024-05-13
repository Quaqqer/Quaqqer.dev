import { JSX } from "preact";
import clsx from "clsx";
import { RenderOptions, render } from "@deno/gfm";
import { HTMLAttributes } from "preact/compat";

const defaultOptions: RenderOptions = {};
const unsafeOptions: RenderOptions = {
  disableHtmlSanitization: true,
};

export default function Markdown({
  src,
  unsafe,
  className,
  class: class_,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  src: string;
  unsafe?: boolean;
}): JSX.Element {
  return (
    <div
      class={clsx("markdown-body prose prose-invert", class_, className)}
      data-color-mode="dark"
      data-dark-theme="dark"
      dangerouslySetInnerHTML={{
        __html: render(src, unsafe ? unsafeOptions : defaultOptions),
      }}
      {...props}
    />
  );
}
