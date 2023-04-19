import { Hero } from "@/modules/header/hero";
import { PropsWithChildren } from "react";
import { w } from "windstitch";

type Props = PropsWithChildren<{}>;

export const metadata = {
  title: "Next.js 13",
};

const Base = w.div(`
  grid grid-cols-1 gap-8 p-6 text-14
  md:grid-cols-2 md:gap-16
  xl:grid-cols-3 
`);

export default function InteractiveRscLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Hero variant="confetti" />
      <Base>{children}</Base>
    </>
  );
}
