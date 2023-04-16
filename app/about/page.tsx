export default async function AboutPage() {
  const res = await fetch("http://localhost:3000/api/hello", {
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  });
  const json = await res.json();

  // Just for demo purposes.
  await new Promise((resolve) => setTimeout(resolve, 3_000));

  return (
    <main className="p-10">
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </main>
  );
}
