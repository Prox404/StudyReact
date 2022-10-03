import { useReducer } from "react";

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  switch (action.type) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return new Error("Invalid action type");
  }
};

function App() {

  console.log('rendering App');

  const [count, dispatch] = useReducer(reducer, 0);

  return (

    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: UP_ACTION })}>Up</button>
      <button onClick={() => dispatch({ type: DOWN_ACTION })}>Down</button>
    </div>
  );
}

export default App;


