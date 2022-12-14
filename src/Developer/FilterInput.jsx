import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDeveloperSettings } from "./useDeveloperSettings.js";

export const FilterInput = () => {
  const { state, dispatch } = useDeveloperSettings();

  return (
    <div
      style={{
        border: "1px solid #dfdfdf",
        borderRadius: "7px",
        color: "#00000066",
        padding: "4px 16px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faSearch} />
      <input
        onChange={({ target: { value } }) =>
          dispatch({ scope: "settings", key: "filter", payload: value })
        }
        value={state.settings.filter}
        placeholder={"search..."}
        style={{
          border: "none",
          backgroundColor: "transparent",
          padding: "8px",
          fontSize: "16px",
          minWidth: "300px",
        }}
      />
    </div>
  );
};
