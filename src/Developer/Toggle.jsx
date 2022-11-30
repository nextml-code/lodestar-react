import { useDeveloperSettings } from "./index.jsx";

// TODO: some styling
export const Toggle = ({ name, selected, scope }) => {
  const { dispatch } = useDeveloperSettings();

  return (
    <div>
      <input
        type={"checkbox"}
        value={selected}
        onChange={() => dispatch({ scope, key: name })}
        defaultChecked={selected}
      />
      &nbsp;{name}
    </div>
  );
};
