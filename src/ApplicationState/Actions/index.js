// There should be no need to touch this file
// Declare the action types in ./types.js
// and map to an update function in ./switch.js

import { curry } from "@nextml/lodestar";
import { ADD, MERGE, REPLACE, TOGGLE } from "./types.js";

const action = curry((type, key, payload) => ({ type, key, payload }));
const noPayloadAction = curry((type, key) => ({ type, key }));

// const construct = (fn) => (actions, actionType) => ({
//   ...actions,
//   [actionType]: fn(actionType),
// });

// export const Actions = PAYLOAD_ACTION_TYPES.reduce(
//   construct(action),
//   NO_PAYLOAD_ACTION_TYPES.reduce(construct(noPayloadAction), {})
// );

export const Actions = {
  merge: action(MERGE),
  add: action(ADD),
  replace: action(REPLACE),

  toggle: noPayloadAction(TOGGLE),
};
