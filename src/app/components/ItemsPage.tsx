"use client";

import { useItems } from "@/context/ItemsContext";
import { useEffect, useState } from "react";

export default function ItemsPage({ items }: { items: any }) {
  const [localItems, setLocalItems] = useState(items);
  const [count, setCount] = useState(0);
  const {data, setData} = useItems();

  useEffect(() => {
    console.log('items', items);
    setData(items);
  }, [items])


  useEffect(() => {
    console.log('data', data);
  }, [data])

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {localItems.map((item: any) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <h2> number of items in context: {data.length}</h2>
    </div>
  );
}

