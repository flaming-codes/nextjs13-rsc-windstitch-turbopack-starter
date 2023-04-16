import Link from "next/link";
import { w } from "windstitch";
import { HeroAnimation } from "./hero-animation.client";

const Base = w.header(`
  h-[40vh] bg-indigo-8
`);

export function Hero() {
  return (
    <Base>
      <Link
        href="https://ptsjs.org/"
        className="relative block w-full h-full"
        title="Visit the great ptsjs.org site for more information"
        target="_blank"
      >
        <HeroAnimation />
      </Link>
    </Base>
  );
}
