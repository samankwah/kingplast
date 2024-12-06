// src/context/DataContext.jsx
import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  return (
    <DataContext.Provider value={{ products, setProducts, blogs, setBlogs }}>
      {children}
    </DataContext.Provider>
  );
}
