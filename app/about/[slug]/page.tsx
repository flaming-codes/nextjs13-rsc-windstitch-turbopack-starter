import { w } from "windstitch";

export async function generateStaticParams() {
  return [];
}

const Section = w.section("text-14  mt-20");

const Button = w.div("text-10 w");

export default function AboutSlugPage(props: NextPageProps) {
  const slug = props.params?.slug;

  return (
    <div className="text-20">
      <h1>/about/[{slug}]</h1>

      <Section>
        <h3>Props</h3>
        <pre>{JSON.stringify({ slug }, null, 2)}</pre>
      </Section>
    </div>
  );
}
