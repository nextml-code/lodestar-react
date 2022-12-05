import React from "react";
import {
  faBug,
  faCircle,
  faFlaskVial,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { camelCaseToSnakeCase, identity } from "@nextml/lodestar";
import { FilterInput } from "../../Developer/FilterInput.jsx";
import { Toggles } from "../../Developer/Toggles.jsx";

import { useDeveloperSettings } from "../../Developer/useDeveloperSettings.js";
import { Map } from "../Map/index.jsx";

const Tab = ({ scope, onClick, icon, selectedTab }) => {
  const { state } = useDeveloperSettings();
  const isSelected = selectedTab === scope;
  const hasSelection = Object.values(state[scope]).filter(identity).length > 0;

  return (
    <div
      onClick={onClick(scope)}
      style={{
        margin: "8px 0",
        color: isSelected ? "#1e90ff" : "inherit",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span
        style={{
          paddingRight: "16px",
          color: isSelected ? "#1e90ff" : "inherit",
          textTransform: "capitalize",
        }}
      >
        <FontAwesomeIcon icon={icon} />
        &nbsp;{camelCaseToSnakeCase(scope).split("_").join(" ")}
      </span>
      <FontAwesomeIcon
        icon={faCircle}
        color={hasSelection ? "#ffa502" : "transparent"}
        style={{ fontSize: "8px", marginLeft: "auto" }}
      />
    </div>
  );
};
const Tabs = ({ setTab, selectedTab }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px 8px",
        fontSize: "18px",
      }}
    >
      <Map
        data={[
          { scope: "debug", icon: faBug },
          { scope: "featureToggles", icon: faFlaskVial },
        ]}
        onClick={(scope) => (_) => setTab(scope)}
        component={Tab}
        selectedTab={selectedTab}
        keyFrom={({ scope }) => scope}
      />
    </div>
  );
};

export const DeveloperSettingsView = () => {
  const { state, dispatch } = useDeveloperSettings();

  const setTab = (scope) => {
    dispatch({ scope: "settings", key: "tab", payload: scope });
  };

  const toggles = Object.entries(state[state.settings.tab])
    .filter(([key, _value]) => key.includes(state.settings.filter))
    .map(([key, value]) => ({
      name: key,
      selected: value,
    }));

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "32px" }}>
      <div style={{ display: "flex" }}>
        <FilterInput />
      </div>

      <div style={{ display: "flex", fontFamily: "monospace" }}>
        <Tabs setTab={setTab} selectedTab={state.settings.tab} />
        <Toggles tab={state.settings.tab} data={toggles} />
      </div>
    </div>
  );
};
