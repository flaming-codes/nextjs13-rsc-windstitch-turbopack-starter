import { PropsWithChildren, ReactNode } from "react";
import { w } from "windstitch";

const Title = w.h1("font-bold shrink-0");

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export function TitleLabel(props: Props) {
  const { title, children, ...rest } = props;

  return (
    <div className="flex flex-col gap-2 md:flex-row" {...rest}>
      <Title>{title}</Title>
      <p className="font-thin opacity-80">{children}</p>
    </div>
  );
}
