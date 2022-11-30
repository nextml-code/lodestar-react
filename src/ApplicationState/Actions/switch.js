import { typeOf } from "@nextml/lodestar";
import { MERGE, REPLACE } from "./types.js";

export const actionSwitch =
  ({ debugState, customActions }) =>
  (state, action) => {
    const { type, key, payload } = action;

    if (debugState[key]) {
      console.log(
        `%c DEBUG: Actions.${action.type}({ ${key}: ${JSON.stringify(
          action.payload
        )} })`,
        "color: #0be881; background: #1e272e; font-size: 12px"
      );
    }

    switch (type) {
      case MERGE: {
        if (typeOf(state[key]) === typeOf(payload)) {
          switch (typeOf(state[key])) {
            case "array": {
              return { ...state, [key]: [...state[key], ...payload] };
            }
            case "object": {
              return { ...state, [key]: { ...state[key], ...payload } };
            }
            default: {
              throw new TypeError(
                `Actions.merge: merge is not implemented for type ${typeOf(
                  state[key]
                )}`
              );
            }
          }
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
