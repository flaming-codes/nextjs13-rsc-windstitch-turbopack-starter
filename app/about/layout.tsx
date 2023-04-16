import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

const twNav =
  "h-screen w-[20vw] flex flex-col justify-between bg-polar-night-200 p-8 text-12";

export default function AboutLayout(props: Props) {
  const { children } = props;

  return (
    <div className="flex">
      <nav className={twNav}>
        <div className="space-y-4">
          <h2>Demo /about nav</h2>
          <hr />
          <Link href="/about/about-0" className="block">
            about-0
          </Link>
          <Link href="/about/about-1" className="block">
            about-1
          </Link>
        </div>
        <div className="space-y-4">
          <Link href="/" className="block">
            home
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
}
