import React, { createContext, useContext, useReducer } from "react";

const DeveloperContext = createContext();

export const useDeveloperSettings = () => useContext(DeveloperContext);

export const DEBUG = "DEBUG";
export const FEATURE = "FEATURE";

const actionSwitch = (state, action) => {
  switch (action.scope) {
    case DEBUG: {
      return {
        ...state,
        debug: {
          ...state.debug,
          [action.key]: !state.debug[action.key],
        },
      };
    }

    case FEATURE: {
      return {
        ...state,
        featureToggles: {
          ...state.featureToggles,
          [action.key]: !state.featureToggles[action.key],
        },
      };
    }

    default: {
      return state;
    }
  }
};

const reducer = (state, action) => {
  const nextState = actionSwitch(state, action);
  return nextState;
};

// TODO: load local storage of settings
const constructInitialStateFrom = ({ initialState, featureToggles }) => ({
  debug: {
    ...Object.keys(initialState).reduce(
      (previous, key) => ({ ...previous, [key]: true }),
      {}
    ),
    // ... stored debug state
  },

  featureToggles: {
    ...featureToggles.reduce(
      (previous, featureName) => ({ ...previous, [featureName]: true }),
      {}
    ),
    // ... stored feature toggles
  },
});

export const DeveloperSettings = ({
  children,
  initialState,
  featureToggles,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    constructInitialStateFrom({ initialState, featureToggles })
  );

  return (
    <DeveloperContext.Provider value={{ state, dispatch }}>
      {children}
    </DeveloperContext.Provider>
  );
};
