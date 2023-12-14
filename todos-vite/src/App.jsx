import "./App.css";
import { useState, useReducer } from "react";
import TodoList from "./components/TodoList";

//react useReducer reducer function created in another file
import reducer from './reducer'

// Redux toolkit stuff
import { useSelector } from "react-redux"; // Access state value
import { useDispatch } from "react-redux"; // allows use of actions
import { addTodo } from "./todoSlice"; // the action


export default function App() {

  // Redux toolkit
  const todosR = useSelector((state) => state.todosR)
  const dispatchR = useDispatch()
  console.log(todosR)

  //react useReducer
  const [todos, dispatch] = useReducer(reducer, []);

  //rest of code
  const [input, setInput] = useState("");
  const [listType, setListType] = useState("all");

  function addToList() {
    dispatch({ type: 'ADD_TODO', payload: input })
    dispatchR(addTodo(input))
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
        todos={todos}
        listType={listType}
        dispatch={dispatch}
      />

      <input value={input} onChange={handleChange} />
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}