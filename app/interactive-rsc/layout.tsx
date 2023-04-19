import { Hero } from "@/modules/header/hero";
import { PropsWithChildren } from "react";
import { w } from "windstitch";

type Props = PropsWithChildren<{}>;

export const metadata = {
  title: "Interactive RSC",
};

const Base = w.div(`
  grid grid-cols-1 gap-8 p-6 text-14
  lg:grid-cols-2 lg:gap-16
`);

const Description = w.section(``);

export default function InteractiveRscLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Hero variant="growing-points" />
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
    </>
  );
}
