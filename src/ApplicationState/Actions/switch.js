import { typeOf } from "@nextml/lodestar";
import { merge } from "./merge.js";
import { MERGE, REPLACE } from "./types.js";

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

    switch (type) {
      case MERGE: {
        if (typeOf(state[key]) === typeOf(payload)) {
          return {
            ...state,
            [key]: merge(state[key], payload),
          };
        } else {
          throw new TypeError(
            `Actions.${type}({ key: ${key}, payload: ${payload} }): payload needs to be of type "${typeOf(
              state[key]
            )}" but got "${typeOf(payload)}".`
          );
        }
      }

      case REPLACE: {
        if (typeOf(state[key]) === typeOf(payload)) {
          return { ...state, [key]: payload };
        } else {
          throw new TypeError(
            `Actions.${type}({ key: ${key}, payload: ${payload} }): payload needs to be of type "${typeOf(
              state[key]
            )}" but got "${typeOf(payload)}".`
          );
        }
      }

      default: {
        return customActions(state, action);
      }
    }
  };
