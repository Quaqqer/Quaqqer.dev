import { PageProps } from "$fresh/server.ts";
import { Navbar } from "@components/Navbar.tsx";

export default function Layout({ Component, state, url }: PageProps) {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar currentHref={url.href} />

      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Component />
      </div>
    </div>
  );
}
