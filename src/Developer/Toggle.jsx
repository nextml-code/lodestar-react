import React from "react";
import { useDeveloperSettings } from "./useDeveloperSettings.js";

// TODO: some styling
export const Toggle = ({ name, scope }) => {
  const { dispatch, state } = useDeveloperSettings();

  return (
    <div style={{ fontSize: "18px", fontWeight: 100 }}>
      <input
        type={"checkbox"}
        onChange={(event) => {
          dispatch({ scope, key: name, payload: event.target.checked });
        }}
        defaultChecked={state[scope][name]}
      />
      &nbsp;{name}
    </div>
  );
};
