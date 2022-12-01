import React from "react";

import {
  DEBUG,
  FEATURE,
  useDeveloperSettings,
} from "../../Developer/index.jsx";
import { Toggle } from "../../Developer/Toggle.jsx";
import { Map } from "../Map/index.jsx";

export const DeveloperSettingsView = () => {
  const {
    state: { debug, featureToggles },
  } = useDeveloperSettings();

  return (
    <div>
      <h1>Developer Settings</h1>

      <h2>Feature Toggles</h2>

      <Map
        data={Object.entries(featureToggles).map(([key, value]) => ({
          name: key,
          selected: value,
        }))}
        component={Toggle}
        scope={FEATURE}
      />

      <h2>Debug</h2>

      <Map
        data={Object.entries(debug).map(([key, value]) => ({
          name: key,
          selected: value,
        }))}
        component={Toggle}
        scope={DEBUG}
      />
    </div>
  );
};
