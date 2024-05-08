import { JSX } from "preact";
import clsx from "clsx";

const buttonSizeClass = {
  xs: "rounded px-2 py-1 text-xs",
  sm: "rounded px-2 py-1 text-sm",
  md: "rounded-md px-2.5 py-1.5 text-sm",
  lg: "rounded-md px-3 py-2 text-sm",
  xl: "rounded-md px-3.5 py-2.5 text-xs",
} as const;

export default function Button({
  sz,
  ...props
}: JSX.HTMLAttributes<HTMLButtonElement> & {
  sz?: "xs" | "sm" | "md" | "lg" | "xl";
}): JSX.Element {
  sz = sz ?? "md";

  return (
    <button
      class={clsx(
        buttonSizeClass[sz],
        "bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
      )}
      {...props}
    />
  );
}
