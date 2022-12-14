Developer Settings View

View that toggles state keys for debug mode and feature toggles.

```jsx
import { ApplicationStateProvider } from "../ApplicationStateProvider/index.jsx";
import { useApplicationState } from "../../ApplicationState/index.js";
import { Actions } from "../../ApplicationState/Actions/index.js";
import { useDebug } from "../../Developer/useDebug.js";

const initialState = {
  scope: {
    component1: {
      value1: 1,
      value2: "hello",
      value3: false,
    },
  },
};

const TestView = () => {
  const { dispatch } = useApplicationState();
  const debug = useDebug();

  return (
    <button
      onClick={() => {
        dispatch(Actions.replace(["scope", "value1"], 100));
      }}
    >
      test me {debug("scope", "debug:scope")}
    </button>
  );
};

<ApplicationStateProvider
  config={{}}
  initialState={initialState}
  featureToggles={["bar"]}
>
  <div>
    <DeveloperSettingsView />
    <TestView />
  </div>
</ApplicationStateProvider>;
```
