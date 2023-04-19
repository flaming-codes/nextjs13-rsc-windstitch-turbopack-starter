import Link from "next/link";
import { Suspense, lazy } from "react";
import { w } from "windstitch";

const animations = {
  rectangles: lazy(async () => ({
    default: (await import("../hero/animation/rectangles.client"))
      .RectanglesHeroAnimation,
  })),
  "growing-points": lazy(async () => ({
    default: (await import("../hero/animation/growing-points.client"))
      .GrowingPointsHeroAnimation,
  })),
  confetti: lazy(async () => ({
    default: (await import("../hero/animation/confetti.client"))
      .ConfettiHeroAnimation,
  })),
} as const;

const Base = w.header(`
  h-[40vh] bg-indigo-8
`);

type Props = {
  variant: keyof typeof animations;
};

export function Hero(props: Props) {
  const { variant } = props;
  const Animation = animations[variant];

  return (
    <Base>
      <Link
        href="https://ptsjs.org/"
        className="relative block w-full h-full"
        title="Visit the great ptsjs.org site for more information"
        target="_blank"
      >
        <Suspense fallback={<Skeleton />}>
          <Animation />
        </Suspense>
      </Link>
    </Base>
  );
}

function Skeleton() {
  return <div className="absolute inset-0 bg-indigo-8 animate-pulse" />;
}
