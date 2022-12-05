import { typeOf } from "@nextml/lodestar";

export const merge = (x, y) => {
  switch (typeOf(x)) {
    case "array": {
      return [...x, ...y];
    }
    case "object": {
      return { ...x, ...y };
    }
    default: {
      throw new TypeError(`merge is not implemented for type ${typeOf(x)}`);
    }
  }
};
