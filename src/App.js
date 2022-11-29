import { Actions } from "./ApplicationState/Actions/index.js";
import { useApplicationState } from "./ApplicationState/index.jsx";
import { Map } from "./components/Map/index.jsx";

const Identity = (props) => (
  <div>
    {Object.keys(props).map((key) => (
      <div>
        {key}: {props[key].toString()}
      </div>
    ))}
  </div>
);

const App = () => {
  const { state, dispatch } = useApplicationState();

  return (
    <div>
      <Map data={state.foo} Component={Identity} />
      <button
        onClick={() => {
          dispatch(Actions.merge("foo", [{ i: state.foo.length }]));
        }}
      >
        click to add to state
      </button>
      <button
        onClick={() => {
          dispatch(Actions.merge("foo", 1));
        }}
      >
        click to add to state
      </button>
      <button
        onClick={() => {
          dispatch(Actions.merge("foo", { i: state.foo.length }));
        }}
      >
        click to add to state
      </button>
    </div>
  );
};

export default App;
