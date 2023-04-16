// Add 'NextPageProps' to global types
declare type NextPageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
