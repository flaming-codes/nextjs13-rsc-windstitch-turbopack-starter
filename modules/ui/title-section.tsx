import { PropsWithChildren, ReactNode } from "react";
import { w } from "windstitch";

const Section = w.section("flex flex-col gap-2 md:flex-row md:gap-4");

const Title = w.h2("font-bold shrink-0 md:text-right");

const Content = w.div("font-thin opacity-80 space-y-2 leading-6");

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export function TitleSection(props: Props) {
  const { title, children, ...rest } = props;

  return (
    <Section {...rest}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Section>
  );
}
