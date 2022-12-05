import React from "react";
import { camelCaseToSnakeCase } from "@nextml/lodestar";
import { Map } from "../components/Map/index.jsx";
import { Toggle } from "./Toggle.jsx";

export const Toggles = ({ tab, data }) => (
  <div style={{ display: "flex", flexDirection: "column", padding: "32px" }}>
    <h2
      style={{
        fontFamily: "monospace",
        margin: 0,
        textTransform: "capitalize",
        fontWeight: "100",
      }}
    >
      {camelCaseToSnakeCase(tab).split("_").join(" ")}
    </h2>

    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}
    >
      <Map
        data={data}
        component={Toggle}
        keyFrom={({ name }) => `${tab}:${name}`}
        scope={tab}
      />
    </div>
  </div>
);
