

async function fetchStaticData() {
  return { message: 'This is static content with ISR!' };
}

export const revalidate = 10; // Revalidate the page every 10 seconds

export default async function ISRExample() {
  const data = await fetchStaticData();

  return (
    <div>
      <h1>Static</h1>
      <p>{data.message}</p>
    </div>
  );
}

