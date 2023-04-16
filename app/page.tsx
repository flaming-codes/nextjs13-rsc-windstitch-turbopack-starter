import { w } from "windstitch";
import Link from "next/link";
import { TitleLabel } from "@/modules/ui/title-label";

const Base = w.div(`
  grid grid-cols-1 gap-8 p-6 text-14
  md:grid-cols-2 md:gap-16
  xl:grid-cols-3 xl:gap-20
  2xl:grid-cols-4 2xl:gap-32
`);

const Section = w.section(``);

export default function Home() {
  return (
    <Base>
      <Section className="col-span-full">
        <TitleLabel title="Features">of this template</TitleLabel>
      </Section>
      <Section>
        <TitleLabel title="tl;dr">
          <Link href="/">
            This is a template to get you started with Next.js 13, RSC (React
            Server Components), Windstitch (Tailwind CSS in React), Storybook 7
            and Turbopack. It uses colaction to organize your code (see{" "}
            <code>/modules</code>) and uses as much new features from Next.js 13
            as possible.
          </Link>
        </TitleLabel>
      </Section>
      <Section>
        <TitleLabel title="Next.js 13 with /app">
          <Link
            href="https://beta.nextjs.org/docs/getting-started"
            target="_blank"
          >
            Next.js 13 introduces a new <code>/app</code> directory that is
            intended to contain all routes as well as meta data, layout
            definitions, and other colocated files. This is a great way to
            organize your application and is a big improvement over the previous
            approach.
          </Link>
        </TitleLabel>
      </Section>
      <Section>
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
            With Next.js 13, you can now revalidate React (Server) components by
            simply adding a<code>revalidate</code> property as 2nd argument to
            the <code>fetch</code> function inside the RSC.
          </Link>
        </TitleLabel>
      </Section>
      <Section>
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
            your React components. It replaces the need for a CSS-in-JS library
            like Emotion or Styled Components and{" "}
            <strong>is compatible with RSC</strong>. Windstitch has a
            styled-like API and supports polymorphic components.
          </Link>
        </TitleLabel>
      </Section>
      <Section>
        <TitleLabel
          title={
            <>
              Windstitch
              <br />& VS Code
            </>
          }
        >
          To improve the DX of Windstitch, this template also includes a custom
          VS Code <code>settings.json</code> file. This extension allows you to
          use Tailwind classes in your CSS-in-JS files and provides
          autocompletion for them. It is not perfect yet, but it is still a
          great improvement over the default experience.
        </TitleLabel>
      </Section>
      <Section>
        <TitleLabel title="Turbopack">
          <Link
            href="https://turbo.build/pack/docs/features/css"
            target="_blank"
          >
            Turbopack is a build tool developed by Vercel that is written in
            Rust. It replaces the need for a bundler like Webpack or Parcel and{" "}
            <strong>is extremely fast</strong>. You should therefore notice a
            significant improvement in your build times.
          </Link>
        </TitleLabel>
      </Section>

      <Section>
        <TitleLabel title="Storybook 7">
          <Link href="https://storybook.js.org/releases/7.0d" target="_blank">
            Version 7 of Storybook is a major release that introduces a new UI,
            a new component explorer, and a new way to write stories. It also
            introduces a new way to write stories using the new
            <code>CSF</code> format. It also offers a first-party integration
            with Next.js.
          </Link>
        </TitleLabel>
      </Section>
      <Section>
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
      </Section>
    </Base>
  );
}
