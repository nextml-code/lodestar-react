import React, { useCallback, useReducer } from "react";
import { ApplicationStateContext } from "../../ApplicationState/index.js";
import { reducer } from "../../ApplicationState/reducer.js";
import { DeveloperSettings } from "../../Developer/index.jsx";
import { useDeveloperSettings } from "../../Developer/useDeveloperSettings.js";

const ApplicationStateConfig = ({
  initialState,
  config,
  customActions,
  children,
}) => {
  const {
    state: { debug: debugState },
  } = useDeveloperSettings();
  const [state, dispatch] = useReducer(
    reducer({ debugState, customActions }),
    initialState
  );

  // Makes it possible to pass several
  // actions to dispatch like:
  // dispatch(action_1, action_2, ..., action_n)
  const customDispatch = useCallback(
    (...actions) => dispatch(actions),
    [dispatch]
  );

  return (
    <ApplicationStateContext.Provider
      value={{
        state,
        dispatch: customDispatch,
        config,
      }}
    >
      {children}
    </ApplicationStateContext.Provider>
  );
};

export const ApplicationStateProvider = ({
  children,
  config,
  initialState = {},
  featureToggles = [],

  // Pass a custom action function
  // (state, action) => { return updatedState }
  // It will be run if no default action type
  // is found.
  customActions = (state, _action) => state,
} = {}) => {
  return (
    <DeveloperSettings
      initialState={initialState}
      featureToggles={featureToggles}
    >
      <ApplicationStateConfig
        config={config}
        initialState={initialState}
        customActions={customActions}
      >
        {children}
      </ApplicationStateConfig>
    </DeveloperSettings>
  );
};
