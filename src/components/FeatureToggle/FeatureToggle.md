Feature Toggle

Component for toggling on/off features.
Toggle the feature on/off in `DeveloperSettingsView`

```jsx
import { ApplicationStateProvider } from "../ApplicationStateProvider/index.jsx";

<ApplicationStateProvider featureToggles={["foo", "bar"]}>
  <FeatureToggle name={"foo"}>foo toggled on</FeatureToggle>
  <br />
  <FeatureToggle name={"bar"}>bar toggled on</FeatureToggle>
</ApplicationStateProvider>;
```
