import React, { useState, useReducer } from "react";

import { reducer, initialState } from "../reducers/reducer";

const TodoForm = props => {
  const { toDoState, dispatch } = props;
  const [newTodoText, setNewTodoText] = useState("");

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
          setNewTodoText("");
        }}
      >
        Add Todo
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
};

export default TodoForm;
