import { useReducer,useRef } from "react";

const initialState = {
  job: "",
  jobs: []
};

const ADD_ACTION = 'adđ';
const REMOVE_ACTION = 'remove';
const TEXT_CHANGE = 'change';

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_ACTION:
        inputRef.current.value = "";
        inputRef.current.focus();
        return {
          ...state,
          jobs: [...state.jobs, state.job],
          job: ""
        };
      case REMOVE_ACTION:
        return {
          ...state,
          jobs: state.jobs.filter((job, index) => index !== action.payload)
        };
      case TEXT_CHANGE:
        console.log(action.payload);
        return {
          ...state,
          job: action.payload
        };
      default:
        return new Error("Invalid action");
    }
  };

  const inputRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { job, jobs } = state
  
  console.log('rendering App');
  return (

    <div className="App">
      <input ref={inputRef} value={job} onChange={(e) => dispatch({ type: TEXT_CHANGE, payload: e.target.value })} />
      <button onClick={() => dispatch({ type: ADD_ACTION, payload: 'payload' })}> Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={job}>{job} <button key={index} onClick={() => dispatch({ type: REMOVE_ACTION, payload: index })}>&times;</button></li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;


