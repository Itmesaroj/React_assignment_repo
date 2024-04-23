// FeactProvider.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FeactDataContext = createContext();

export const FeactDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FeactDataContext.Provider value={{ products, loading, error }}>
      {children}
    </FeactDataContext.Provider>
  );
};
