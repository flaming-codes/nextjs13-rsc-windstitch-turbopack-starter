import Link from "next/link";
import { PropsWithChildren } from "react";
import { W, w } from "windstitch";

const Base = w.main(`
  flex flex-col items-center justify-center overflow-y-auto
  rounded-xl bg-sand-12 text-blackA-12
`);

type Props = PropsWithChildren<{}>;

export function Main(props: Props) {
  const { children, ...rest } = props;

  return (
    <Base style={{ height: "calc(100vh - var(--header-h))" }} {...rest}>
      {children}
    </Base>
  );
}
