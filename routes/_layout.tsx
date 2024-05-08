import { PageProps } from "$fresh/server.ts";
import { Navbar } from "@components/Navbar.tsx";

export default function Layout({ Component, url }: PageProps) {
  return (
    <div class="bg-gray-800 min-h-screen">
      <Navbar currentHref={url.pathname} />

      <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <Component />
      </div>
    </div>
  );
}
