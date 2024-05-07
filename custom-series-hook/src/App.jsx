
import useToggleItems from './custom/useToggleItems';

const App = () => {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div>
      <h1>Current State: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};



export default App;
