
interface Params {
  params: { id: string };
}

async function fetchData(id: string) {
  return { message: `You passed ID: ${id}` };
}

export default async function SSRWithParams({ params }: Params) {
  const data = await fetchData(params.id);

  return (
    <div>
      <h1>SSR with Route Parameters</h1>
      <p>{data.message}</p>
    </div>
  );
}
