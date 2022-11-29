import React from "react";
import { isDefined } from "@nextml/lodestar";

export const Map = ({ data, Component, keyFrom, ...props }) =>
  data.map((entry, index) => (
    <Component
      {...props}
      {...entry}
      key={isDefined(keyFrom) ? entry[keyFrom] : index}
      entry={entry}
    />
  ));
