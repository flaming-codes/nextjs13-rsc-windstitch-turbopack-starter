"use client";

import { PropsWithChildren } from "react";
import { W, w } from "windstitch";

const Section = w.section("py-20 text-18", {
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

export function Block(props: PropsWithChildren<SectionProps>) {
  const { children, ...rest } = props;

  return (
    <Section variant="secondary" {...rest}>
      {children}
    </Section>
  );
}
