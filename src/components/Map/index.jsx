import React from "react";

export const Map = ({ data, component: Component, keyFrom, ...props }) =>
  data.map((entry, index) => (
    <Component
      entry={entry}
      {...props}
      {...entry}
      key={keyFrom(entry, index)}
    />
  ));
