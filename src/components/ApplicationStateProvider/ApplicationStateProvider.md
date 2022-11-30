Preconfigured React context for global state management.

```jsx
const App = () => {
  return (
    <ApplicationStateProvider
      config={
        {
          // some config passed to the context
        }
      }
      initialState={
        {
          // some initial state for the reducer
        }
      }
      featureToggles={["foo"]}
    >
      <div>Your app...</div>
    </ApplicationStateProvider>
  );
};
```
