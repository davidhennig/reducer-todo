import React, { useReducer } from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";
import { reducer, initialState } from "./reducers/reducer";

const App = () => {
  const [toDoState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoList dispatch={dispatch} toDoState={toDoState} />
      <h2>Add New Tasks Below</h2>
      <TodoForm dispatch={dispatch} toDoState={toDoState} />
    </div>
  );
};

export default App;
