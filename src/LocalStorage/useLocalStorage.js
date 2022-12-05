import { useEffect } from "react";
import { STORAGE_KEY } from "./index.jsx";

export const useLocalStorage = (key, value) => {
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ [key]: value }));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);
};
