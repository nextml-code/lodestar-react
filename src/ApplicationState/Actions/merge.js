import { curry, typeOf } from "@nextml/lodestar";

export const merge = curry((x, y) => {
  switch (typeOf(x)) {
    case "array": {
      return [...y, ...x];
    }
    case "object": {
      return { ...y, ...x };
    }
    default: {
      throw new TypeError(`merge is not implemented for type ${typeOf(x)}`);
    }
  }
});
