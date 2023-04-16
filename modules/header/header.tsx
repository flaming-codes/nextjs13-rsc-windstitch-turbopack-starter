import Link from "next/link";
import { PropsWithChildren } from "react";
import { W, w } from "windstitch";

const Nav = w.nav("h-[--header-h] flex items-center gap-4 px-4");

const LinkItem = w(Link, {
  className: `
    text-14 font-light tracking-widest uppercase underline-offset-2 text-whiteA-12 
    hover:text-whiteA-10
    transition-colors duration-200 ease-in-out
  `,
});

export function Header() {
  return (
    <header>
      <Nav>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/about">About</LinkItem>
      </Nav>
    </header>
  );
}
