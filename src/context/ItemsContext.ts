'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

const ItemsContext = createContext<any>(null);

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemsContext);
}
