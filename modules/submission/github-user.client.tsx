"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { w } from "windstitch";

const Form = w.form(`
  flex flex-col items-start gap-2
`);

type Props = {
  defaultValue?: string;
};

export function GithubUserForm(props: Props) {
  const { defaultValue } = props;

  const { replace } = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const name = formData.get("name");

    startTransition(() => {
      replace(`/interactive-rsc/${name}`);
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name" className="uppercase opacity-70">
        Name
      </label>
      <div className="flex items-center py-4 border-b">
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={defaultValue}
          className="flex-1 bg-transparent "
        />
        <button className="ml-2">{isPending ? "Loading..." : "Submit"}</button>
      </div>
    </Form>
  );
}
