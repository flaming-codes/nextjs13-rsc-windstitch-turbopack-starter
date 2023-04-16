import { PropsWithChildren } from "react";
import { w } from "windstitch";

const Base = w.main("flex flex-col");

type Props = PropsWithChildren<{}>;

export function Main(props: Props) {
  const { children, ...rest } = props;
  return <Base {...rest}>{children}</Base>;
}
