interface Params {
  params: { id: string };
}

export default function ProductPage({ params }: Params) {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {params.id}</p>
    </div>
  );
}
