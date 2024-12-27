import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const addLocalStorageStateValue = (value) => {
    const products = JSON.parse(localStorage.getItem(key)) || [];
    const newProducts = [...products, value];

    localStorage.setItem(key, JSON.stringify(newProducts));
    setLocalStorageValue(newProducts);
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
    setLocalStorageValue([]);
  };

  return { localStorageValue, addLocalStorageStateValue, clearStorage };
};

export default useLocalStorage;
