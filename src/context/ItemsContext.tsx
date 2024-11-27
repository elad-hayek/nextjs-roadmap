'use client';


import { createContext, useState, useContext, ReactNode } from 'react';

// Create the context with a default value of null
const ItemsContext = createContext<any>(null);

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<any[]>([]);

  return (
    <ItemsContext.Provider value={{ data, setData }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  return useContext(ItemsContext);
}

