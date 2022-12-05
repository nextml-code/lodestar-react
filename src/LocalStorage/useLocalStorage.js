import { useEffect } from "react";
import { STORAGE_KEY } from "./index.js";

export const useLocalStorage = (key, value) => {
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ [key]: value }));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);
};
