import "./App.css";
import { useRef } from "react";
import { useStore, actions } from './store';

function App() {

  const inputRef = useRef();

  const { state, dispatch } = useStore();
  const { todos, todoInput, edit, index_edit} = state;

  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
  }
  return (
    <>
      <input ref={inputRef} value={todoInput}
        onChange={(e) => dispatch(actions.changeInputTodo(e.target.value))}>
      </input>
      { 
        (edit &&<button onClick={() => dispatch(actions.editTodo({ todo: todoInput, index: index_edit }))}>Edit Todo</button> ) ||  <button onClick={handleAddTodo}>Add Todo</button>
      }
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
            <button onClick={() => dispatch(actions.deleteTodo(index))}>&times;</button>
            <button onClick={() => dispatch(actions.toggleEdit(index))}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;


