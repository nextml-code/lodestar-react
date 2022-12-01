import React from "react";
import { isDefined } from "@nextml/lodestar";

export const Map = ({ data, component: Component, keyFrom, ...props }) =>
  data.map((entry, index) => (
    <Component
      entry={entry}
      {...props}
      {...entry}
      key={isDefined(keyFrom) ? entry[keyFrom] : index}
    />
  ));
