import { Actions } from "./ApplicationState/Actions/index.js";
import { useApplicationState } from "./ApplicationState/index.jsx";
import { Map } from "./components/Map/index.jsx";
import { ApplicationStateProvider } from "./components/ApplicationStateProvider/index.jsx";
import { DeveloperSettingsView } from "./components/DeveloperSettingsView/index.jsx";

const Foo = (props) => (
  <div>
    {Object.keys(props).map((key) => (
      <div key={key}>
        {key}: {props[key].toString()}
      </div>
    ))}
  </div>
);

const TestView = () => {
  const { state, dispatch } = useApplicationState();

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "7px",
        padding: "32px",
      }}
    >
      <h2>Test View</h2>
      <Map data={state.foo} component={Foo} keyFrom={(x) => x.i} />

      <button
        onClick={() => {
          dispatch(
            Actions.merge("foo", [{ i: state.foo.length }]),
            Actions.replace("bar", "bar2")
          );
        }}
      >
        click to add to state
      </button>

      <h2>{state.thousand}</h2>

      <button
        onClick={() => {
          dispatch({ type: "clear", key: "thousand" });
        }}
      >
        clear
      </button>

      <button
        onClick={() => {
          dispatch({ type: "biggest", key: "thousand" });
        }}
      >
        biggest
      </button>

      <button
        onClick={() => {
          dispatch(Actions.merge("foo", 1));
        }}
      >
        click to trigger error
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ApplicationStateProvider
      config={{}}
      initialState={{
        foo: [{ i: 0 }],
        bar: "bar",
        baz: { one: {} },
        thousand: 1000,
      }}
      featureToggles={["foo"]}
      customActions={(state, action) => {
        switch (action.type) {
          case "clear": {
            return { ...state, [action.key]: 0 };
          }
          case "biggest": {
            return { ...state, [action.key]: 1000 };
          }
          default: {
            return state;
          }
        }
      }}
    >
      <div>
        <h1>Lodestar React</h1>
        <TestView />
        <DeveloperSettingsView />
      </div>
    </ApplicationStateProvider>
  );
};

export default App;
