import { NextSeo } from "next-seo";

export default function Head(props: NextPageProps) {
  const slug = props.params?.slug;

  return (
    <>
      <NextSeo title={`About ${slug ?? "-"}`} />
    </>
  );
}
