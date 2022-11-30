Developer Settings View

View that toggles state keys for debug mode and feature toggles.

```jsx
import { ApplicationStateProvider } from "../ApplicationStateProvider/index.jsx";

<ApplicationStateProvider
  config={{}}
  initialState={{
    foo: {},
  }}
  featureToggles={["bar"]}
>
  <DeveloperSettingsView />
</ApplicationStateProvider>;
```
