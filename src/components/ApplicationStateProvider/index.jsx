import { useCallback, useReducer } from "react";
import { ApplicationStateContext } from "../../ApplicationState/index.jsx";
import { reducer } from "../../ApplicationState/reducer.js";
import {
  DeveloperSettings,
  useDeveloperSettings,
} from "../../Developer/index.jsx";

const ApplicationStateConfig = ({ initialState, config, children }) => {
  const {
    state: { debug: debugState },
  } = useDeveloperSettings();
  const [state, dispatch] = useReducer(reducer(debugState), initialState);

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
  initialState,
  featureToggles,
}) => {
  return (
    <DeveloperSettings
      initialState={initialState}
      featureToggles={featureToggles}
    >
      <ApplicationStateConfig config={config} initialState={initialState}>
        {children}
      </ApplicationStateConfig>
    </DeveloperSettings>
  );
};
