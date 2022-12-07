import { updateIn } from "@nextml/lodestar";
import { merge } from "./merge.js";
import { ADD, MERGE, REPLACE, TOGGLE } from "./types.js";

export const actionSwitch =
  ({ debugState, customActions }) =>
  (state, action) => {
    const { type, key, payload } = action;

    if (debugState[key]) {
      console.log(
        `%c DEBUG: Actions.${action.type}({ ${key} })`,
        "color: #0be881; background: #1e272e; font-size: 12px"
      );
      console.log(action.payload);
    }

    // TODO: validation of payload, state value and type

    switch (type) {
      case ADD: {
        return updateIn((value) => value + payload, key, state);
      }

      case MERGE: {
        return updateIn(merge(payload), key, state);
      }

      case REPLACE: {
        return updateIn((_) => payload, key, state);
      }

      case TOGGLE: {
        return updateIn((value) => !value, key, state);
      }

      default: {
        return customActions(state, action);
      }
    }
  };
