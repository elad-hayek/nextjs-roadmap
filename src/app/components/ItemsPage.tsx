"use client";

import { useState } from "react";

export default function ItemsPage({ items }: { items: any }) {
  const [localItems, setLocalItems] = useState(items);
  const [count, setCount] = useState(0);

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
    </div>
  );
}
