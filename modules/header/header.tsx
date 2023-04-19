import Link from "next/link";
import { W, w } from "windstitch";
import { TitleLabel } from "../ui/title-label";
import {
  HomeIcon,
  LightningBoltIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

const Base = w.header(`
  flex flex-col justify-between gap-4 p-6
  text-14

  md:flex-row md:items-stretch
`);

const Nav = w.nav(`
  flex flex-col gap-8

  md:flex-row-reverse
`);

const LinkItem = w(Link, {
  className: `
    flex items-center
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
        <LinkItem href="/">
          <HomeIcon className="mr-2" /> Home
        </LinkItem>
        <LinkItem href="/interactive-rsc">
          <Pencil2Icon className="mr-2" /> Interactive RSC
        </LinkItem>
        <LinkItem href="/next-13">
          <LightningBoltIcon className="mr-2" /> Next.js 13
        </LinkItem>
      </Nav>
    </Base>
  );
}
