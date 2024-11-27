import ItemsPage from "../components/ItemsPage";

export default async function Items() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store",
  });
  const items = await res.json();

  return <ItemsPage items={items} />;
}
