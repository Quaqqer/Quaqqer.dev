import { JSX } from "preact";
import { RenderOptions, render } from "@deno/gfm";

const defaultOptions: RenderOptions = {};
const unsafeOptions: RenderOptions = {
  disableHtmlSanitization: true,
};

export default function Markdown({
  src,
  unsafe,
}: {
  src: string;
  unsafe?: boolean;
}): JSX.Element {
  return (
    <div
      class="markdown-body prose prose-invert"
      data-color-mode="dark"
      data-dark-theme="dark"
      dangerouslySetInnerHTML={{
        __html: render(src, unsafe ? unsafeOptions : defaultOptions),
      }}
    />
  );
}
