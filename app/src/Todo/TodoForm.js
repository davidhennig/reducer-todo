import React, { useState, useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";

const TodoForm = props => {
  const [toDoState, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState("");

  const handleComplete = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };
  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };
  return (
    <div>
      <input
        className=""
        type="text"
        value={newTodoText}
        onChange={handleChanges}
        name="newTodoText"
      />
      {console.log(toDoState)}
      <button
        onClick={() => {
          dispatch({ type: "UPDATE_TODO", payload: newTodoText });
        }}
      >
        Add Todo
      </button>
      <button onClick={handleComplete}>Clear Completed</button>
    </div>
  );
};

export default TodoForm;
