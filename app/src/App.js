import React, { useReducer } from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";
import { reducer, initialState } from "./reducers/reducer";

const App = () => {
  const [toDoState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <TodoList toDoState={toDoState} />
      <h2>Add New Tasks Below</h2>
      <TodoForm />
    </div>
  );
};

export default App;
