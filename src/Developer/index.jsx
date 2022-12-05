import React, { useReducer } from "react";

import { useLocalStorage } from "../LocalStorage/useLocalStorage.js";
import { constructInitialStateFrom } from "./constructInitialStateFrom.js";
import { reducer } from "./reducer.js";
import { DeveloperContext } from "./useDeveloperSettings.js";

export const DeveloperSettings = ({
  children,
  initialState,
  featureToggles,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    constructInitialStateFrom({ initialState, featureToggles })
  );

  useLocalStorage("developer", state);

  return (
    <DeveloperContext.Provider value={{ state, dispatch }}>
      {children}
    </DeveloperContext.Provider>
  );
};
