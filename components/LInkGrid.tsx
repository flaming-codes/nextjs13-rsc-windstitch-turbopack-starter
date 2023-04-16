import Link from "next/link";
import { PropsWithChildren } from "react";
import { W, w } from "windstitch";

const Section = w.section("py-20 text-18 grid gap-8 grid-cols-3", {
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "bg-polar-night-200 text-frost-200",
      secondary: "bg-frost-200 text-polar-night-200",
    },
  },
});

type SectionProps = W.Infer<typeof Section>;

export function LinkGrid(props: PropsWithChildren<SectionProps>) {
  const { children, ...rest } = props;

  return (
    <Section variant="secondary" {...rest}>
      {children}
    </Section>
  );
}

const Item = w(Link, {
  className: `
    text-18 p-4 border border-bronze-10 rounded-sm
    hover:bg-bronze-10
    transition-colors duration-200 ease-in-out
  `,
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary: "bg-polar-night-200 text-frost-200",
      secondary: "bg-frost-200 text-polar-night-200",
    },
  },
});

export function LinkGridItem(props: { href: string; title: string }) {
  const { href, title, ...rest } = props;

  return (
    <Item variant="secondary" href={href} {...rest}>
      {title}
    </Item>
  );
}
