import { actionSwitch } from "./Actions/switch.js";

export const reducer = (state, actions) => {
  // Performs all passed actions to dispatch in order
  // dispatch(action_1, action_2, ..., action_n)
  // -> [action_1, action_2, ..., action_n]
  // where action_n is performed on the result of
  // action_(n-1)
  const nextState = actions.reduce(actionSwitch, state);

  return nextState;
};
