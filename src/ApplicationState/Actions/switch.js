import { typeOf } from "@nextml/lodestar";
import { MERGE, REPLACE } from "./types.js";

export const actionSwitch = (state, action) => {
  const { type, key, payload } = action;

  if (typeOf(state[key]) === typeOf(payload)) {
    switch (type) {
      case MERGE: {
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
      }

      case REPLACE: {
        return { ...state, [key]: payload };
      }

      default: {
        return state;
      }
    }
  } else {
    throw new TypeError(
      `Actions.${type}({ key: ${key}, payload: ${payload} }): payload needs to be of type "${typeOf(
        state[key]
      )}" but got "${typeOf(payload)}".`
    );
  }
};
