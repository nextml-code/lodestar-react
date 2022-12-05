import { createContext, useContext } from "react";

export const DeveloperContext = createContext();
export const useDeveloperSettings = () => useContext(DeveloperContext);
