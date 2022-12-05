import { LocalStorage } from "../LocalStorage/index.js";

const developerStorage = LocalStorage.read()?.developer;

export const constructInitialStateFrom = ({
  initialState,
  featureToggles,
}) => ({
  debug: {
    ...Object.keys(initialState)
      .sort()
      .reduce((previous, key) => ({ ...previous, [key]: false }), {}),
    ...developerStorage?.debug,
  },

  featureToggles: {
    ...featureToggles
      .sort()
      .reduce(
        (previous, featureName) => ({ ...previous, [featureName]: false }),
        {}
      ),
    ...developerStorage?.featureToggles,
  },

  settings: {
    filter: "",
    tab: "debug",
  },
});
