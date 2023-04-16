import clsx from "clsx";
import { w } from "windstitch";

const twBase = "text-white";

const Link = w.a("", {
  defaultVariants: {
    bg: "blue",
  },
  variants: {
    bg: {
      blue: " bg-blue-50",
      green: " bg-green-300",
    },
  },
});

export function Debug() {
  return (
    <div className={clsx("bg-blue-500 p-8 font-sans", twBase)}>
      <h1>Debug</h1>
      <p>Debugging</p>
      <Link bg="blue" href="https://nextjs.org/docs">
        Documentation &rarr;
      </Link>
    </div>
  );
}
