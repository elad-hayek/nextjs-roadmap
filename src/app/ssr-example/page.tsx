
async function fetchData() {
  // Simulating a server-side fetch
  return { message: 'This is server-side rendered content!' };
}

export default async function SSRExample() {
  const data = await fetchData();

  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>{data.message}</p>
    </div>
  );
}

