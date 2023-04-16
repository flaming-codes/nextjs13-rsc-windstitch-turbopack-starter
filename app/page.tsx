import clsx from "clsx";
import { W, w } from "windstitch";
import NextLink from "next/link";
import { twc, twMerge } from "@/utils/tailwind";
import { Block } from "@/components/Block.client";
import { LinkGrid, LinkGridItem } from "@/components/LInkGrid";

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
      <section className="mt-4 text-center">
        <h1 className="text-160-fluid">Hello World</h1>
        <p className="text-48-fluid">
          This is a Next.js app with Tailwind CSS.
        </p>
      </section>

      <LinkGrid className="max-w-6xl mx-auto mt-8">
        <LinkGridItem href="/" title="Home" />
        <LinkGridItem href="/about" title="About" />
      </LinkGrid>
    </main>
  );
}
