import { useCallback } from "react";
import { useDeveloperSettings } from "./useDeveloperSettings.js";

export const useDebug = () => {
  const { debug } = useDeveloperSettings();

  const debugWith = useCallback(() => {
    return (key, effect) => {
      // TODO: nested states
      if (debug[key]) {
        return effect;
      } else {
        // do nothing
      }
    };
  }, [debug]);

  return debugWith;
};
