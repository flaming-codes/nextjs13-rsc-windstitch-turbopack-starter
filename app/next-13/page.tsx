import { TitleLabel } from "@/modules/ui/title-label";
import Link from "next/link";

export default function Next13Page() {
  return (
    <>
      <section>
        <TitleLabel title="tl;dr">
          <Link href="/">
            This is a template to get you started with Next.js 13, RSC (React
            Server Components), Windstitch (Tailwind CSS in React), and
            Turbopack. It uses colaction to organize your code (see{" "}
            <code>/modules</code>) and uses as much new features from Next.js 13
            as possible.
          </Link>
        </TitleLabel>
      </section>
    </>
  );
}
