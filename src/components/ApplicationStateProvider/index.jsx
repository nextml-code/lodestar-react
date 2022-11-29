import { useCallback, useReducer } from "react";
import { ApplicationStateContext } from "../../ApplicationState/index.jsx";
import { reducer } from "../../ApplicationState/reducer.js";

export const ApplicationStateProvider = ({
  children,
  config,
  initialState,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        // debug
        // features
      }}
    >
      {children}
    </ApplicationStateContext.Provider>
  );
};
