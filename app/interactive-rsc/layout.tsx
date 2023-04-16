import Link from "next/link";
import { PropsWithChildren } from "react";
import { w } from "windstitch";

type Props = PropsWithChildren<{}>;

const Base = w.div(`
  grid grid-cols-1 gap-8 p-6 text-14
  lg:grid-cols-2 lg:gap-16
`);

const Description = w.section(``);

export default function AboutLayout(props: Props) {
  const { children } = props;

  return (
    <Base>
      <Description>
        <h1 className="text-4xl font-bold">About</h1>
        <p className="mt-4">
          This is a demo for an interactive{" "}
          <strong>React Server Component.</strong>
        </p>
      </Description>
      {children}
    </Base>
  );
}
