"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: 1, href: "/", label: "Home" },
  { id: 2, href: "/posts", label: "Posts" },
  { id: 3, href: "/create-post", label: "Create Post" },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="h-20 px-10 flex items-center justify-between border-b border-zinc-300">
      <Link
        href={"/"}
        className=" h-10 w-10 text-xl 
         lg:h-12 lg:w-12 lg:text-2xl flex items-center justify-center bg-zinc-700 text-zinc-100 font-bold rounded-lg"
      >
        B
      </Link>
      <ul className="flex items-center gap-4 lg:gap-8 lg:text-lg font-medium text-zinc-400">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className={pathName === link.href ? "text-zinc-800" : ""}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
