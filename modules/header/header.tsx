import Link from "next/link";
import { W, w } from "windstitch";
import { TitleLabel } from "../ui/title-label";

const Base = w.header(`
  flex flex-col justify-between gap-4 p-6
  text-14

  md:flex-row md:items-stretch
`);

const Nav = w.nav(`
  flex flex-col gap-4
  
  md:flex-row-reverse
`);

const LinkItem = w(Link, {
  className: `
    transition-opacity duration-200 ease-in-out
    hover:opacity-50
  `,
});

export function Header() {
  return (
    <Base>
      <TitleLabel title="Next.js / RSC / Windstitch Starter">
        by <a href="https://flaming.codes">flaming.codes</a>
      </TitleLabel>
      <Nav>
        <LinkItem href="/">Home</LinkItem>
        <LinkItem href="/interactive-rsc">Interactive RSC</LinkItem>
      </Nav>
    </Base>
  );
}
