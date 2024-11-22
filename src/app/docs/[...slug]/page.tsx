interface Params {
  params: { slug: string[] };
}

export default function DocsPage({ params }: Params) {
  const slug = params.slug || [];
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {slug.join("/")}</p>
    </div>
  );
}
