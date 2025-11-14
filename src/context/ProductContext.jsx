import React, { createContext, useEffect, useState } from "react";
import { getProduct } from "../services/productos";

export const ContextProduct = createContext();

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterSearch, setFilterSearch] = useState("");


  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }, []);

  return (
    <ContextProduct.Provider value={{ product, loading, setProduct , filterSearch, setFilterSearch}}>
      {children}
    </ContextProduct.Provider>
  );
};

export default ProductContext;
