import { useDeveloperSettings } from "../../Developer/useDeveloperSettings.js";

export const FeatureToggle = ({ name, children }) => {
  const {
    state: { featureToggles },
  } = useDeveloperSettings();

  if (featureToggles[name]) {
    return children;
  }

  return null;
};
