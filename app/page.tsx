import clsx from "clsx";
import { W, w } from "windstitch";
import NextLink from "next/link";
import { twc, twMerge } from "@/utils/tailwind";
import { Block } from "@/components/Block.client";

const exampleClasses = {
  md: "md:text-4xl md:mt-8",
  lg: "in top-0",
};

const singleClasses = "font-sans inset-0";
const what = twc`font-sans`;
const merge = twMerge("font-sans", "text-20");

const twExample = {
  md: "font-sans inset-0",
};

const Button = w.button("block  text-24 underline underline-offset-2", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "",
      secondary: "",
    },
  },
});
type ButtonProps = W.Infer<typeof Button>;

const Link = w.a("", {
  defaultVariants: {
    bg: "blue",
  },
  variants: {
    bg: {
      blue: " bg-[#0070f3]",
      green: " bg-[#67e480]",
    },
  },
});

export default function Home() {
  return (
    <main className="p-8 bg-polar-night-200">
      <h1 className="text-40">Hello World</h1>
      <p className="text-10">This is a Next.js app with Tailwind CSS.</p>

      <div className="mt-8">
        <a
          className="inline-block px-4 py-2 text-white rounded-lg bg-polar-night-200 text-20 hover:bg-polar-night-300"
          href="https://nextjs.org/docs"
        >
          Documentation &rarr;
        </a>
        <Link bg="green" href="/">
          A styled-like link
        </Link>
      </div>

      <div className="py-10">
        <Button>A serif-font button</Button>
      </div>

      <div className="py-10">
        <h2 className="text-32 text-frost-100">
          Polymorphic component via <code>windstitch</code>
          <p>Button as anchor</p>
        </h2>
        <Button as="a" href="/about">
          {"I am a Button as 'a'"}
        </Button>
        <Button as={NextLink} href="/about">
          {"I am a Button as 'NextLink'"}
        </Button>
      </div>

      <section>
        <h2 className={clsx("text-2xl  text-white", exampleClasses.md)}>Examples</h2>
        <h3></h3>
        <ul className="mt-4 space-y-4">
          <li>
            <NextLink
              className="inline-block px-4 py-2 rounded-lg text-polar-night-100 bg-snow-storm-200 text-40 hover:bg-snow-storm-300"
              href="/about"
            >
              /about
            </NextLink>
          </li>
        </ul>
      </section>

      <Block className="bg-black">
        <h2 className="text-white text-20">Block</h2>
      </Block>
    </main>
  );
}
