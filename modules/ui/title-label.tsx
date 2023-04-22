import { PropsWithChildren, ReactNode } from "react";
import { w } from "windstitch";

const Title = w.h2("font-bold shrink-0 md:text-right");

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export function TitleLabel(props: Props) {
  const { title, children, ...rest } = props;

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-4" {...rest}>
      <Title>{title}</Title>
      <p className="font-thin opacity-80 leading-5">{children}</p>
    </div>
  );
}
