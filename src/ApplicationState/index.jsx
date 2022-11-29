import { createContext, useContext } from "react";

export const ApplicationStateContext = createContext();
export const useApplicationState = () => useContext(ApplicationStateContext);
