import { w } from "windstitch";
import Link from "next/link";
import { TitleLabel } from "@/modules/ui/title-label";
import { Hero } from "@/modules/header/hero";

const Base = w.div(`
  grid grid-cols-1 gap-8 p-6 text-14
  md:grid-cols-2 md:gap-16
  xl:grid-cols-3 xl:gap-20
  2xl:grid-cols-4 2xl:gap-32
`);

export default function Home() {
  return (
    <>
      <Hero variant="spinning" />
      <Base>
        <section className="col-span-full">
          <TitleLabel title="Features">of this template</TitleLabel>
        </section>
        <section>
          <TitleLabel title="tl;dr">
            <Link href="/">
              This is a template to get you started with Next.js 13, RSC (React
              Server Components), Windstitch (Tailwind CSS in React), and
              Turbopack. It uses colaction to organize your code (see{" "}
              <code>/modules</code>) and uses as much new features from Next.js
              13 as possible.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Next.js 13
                <br />
                with <code>/app</code>
              </>
            }
          >
            <Link
              href="https://beta.nextjs.org/docs/getting-started"
              target="_blank"
            >
              Next.js 13 introduces a new <code>/app</code> directory that is
              intended to contain all routes as well as meta data, layout
              definitions, and other colocated files. This is a great way to
              organize your application and is a big improvement over the
              previous approach.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Revalidation of
                <br />
                React Components
              </>
            }
          >
            <Link
              href="https://nextjs.org/blog/next-13#data-fetching"
              target="_blank"
            >
              With Next.js 13, you can now revalidate React (Server) components
              by simply adding a<code>revalidate</code> property as 2nd argument
              to the <code>fetch</code> function inside the RSC.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Windstitch
                <br />
                for Tailwind
              </>
            }
          >
            <Link href="https://windstitch.vercel.app/" target="_blank">
              Windstitch is a library that allows you to use Tailwind classes in
              your React components. It replaces the need for a CSS-in-JS
              library like Emotion or Styled Components and{" "}
              <strong>is compatible with RSC</strong>. Windstitch has a
              styled-like API and supports polymorphic components.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Radix UI
                <br />
                Colors
              </>
            }
          >
            <Link href="https://github.com/brattonross/windy-radix-palette">
              The color palette designed by Radix UI is a great selection to use
              in your project. Radix made sure they are accessible when combined
              and also has a guide what colors to use together. To integrate
              Radix UI Colors with Tailwind, I added{" "}
              <code>windy-radix-palette</code> to this template.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Windstitch
                <br />& VS Code
              </>
            }
          >
            To improve the DX of Windstitch, this template also includes a
            custom VS Code <code>settings.json</code> file. This extension
            allows you to use Tailwind classes in your CSS-in-JS files and
            provides autocompletion for them. It is not perfect yet, but it is
            still a great improvement over the default experience.
          </TitleLabel>
        </section>
        <section>
          <TitleLabel title="Turbopack">
            <Link
              href="https://turbo.build/pack/docs/features/css"
              target="_blank"
            >
              Turbopack is a build tool developed by Vercel that is written in
              Rust. It replaces the need for a bundler like Webpack or Parcel
              and <strong>is extremely fast</strong>. You should therefore
              notice a significant improvement in your build times.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel title="TypeScript 5">
            <Link
              href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/"
              target="_blank"
            >
              This template also uses TypeScript 5. TypeScript 5 introduces
              performance improvements, new features (like the{" "}
              <code>satisfies</code>-operator), and bug fixes.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel
            title={
              <>
                Demo by
                <br />
                Pts.js
              </>
            }
          >
            <Link href="https://ptsjs.org/" target="_blank">
              Pts.js is a library for creative coding in JavaScript and powers
              the playful animation in the hero section of this page. Feel free
              to remove it if you do not need it. But I highly recommend you to
              check it out.
            </Link>
          </TitleLabel>
        </section>
        <section>
          <TitleLabel title="Radix Colors">
            <Link href="https://www.radix-ui.com/colors" target="_blank">
              Radix UI Colors is a library that provides a set of accessible
              colors that work well together. It is used to define the color
              palette of this template, including support for dark mode.
            </Link>
          </TitleLabel>
        </section>
      </Base>
    </>
  );
}
