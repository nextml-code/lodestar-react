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
    <div>
      <p>hello world</p>
      <Map data={state.foo} component={Foo} />

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
      }}
      featureToggles={["foo"]}
    >
      <TestView />
      <DeveloperSettingsView />
    </ApplicationStateProvider>
  );
};

export default App;
