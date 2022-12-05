const actionSwitch = (state, action) => {
  // console.log(state, action);
  return {
    ...state,
    [action.scope]: {
      ...state[action.scope],
      [action.key]: action.payload,
    },
  };
};

export const reducer = (state, action) => {
  const nextState = actionSwitch(state, action);
  // console.log(nextState);
  return nextState;
};
