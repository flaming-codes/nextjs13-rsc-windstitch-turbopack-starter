import { w } from "windstitch";

export async function generateStaticParams() {
  const slugs = ["about-0", "about-1"];
  return slugs.map((slug) => ({ slug }));
}

const Section = w.section("text-14  mt-20");

const Button = w.div("text-10 w");

export default function AboutSlugPage(props: NextPageProps) {
  const slug = props.params?.slug;

  console.log("AboutSlugPage", { slug });

  return (
    <div className="text-20">
      <h1>/about/[{slug}]</h1>

      <Section>
        <h3>Props</h3>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Section>
    </div>
  );
}
