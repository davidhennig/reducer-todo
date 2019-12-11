import React, { useReducer } from "react";
import Todo from "./Todo";

import { reducer, initialState } from "../reducers/reducer";

const TodoList = props => {
  const { toDoState, dispatch } = props;
  return (
    <div>
      {console.log(toDoState)}
      {toDoState.items.map(element => {
        return (
          <Todo
            key={element.id}
            id={element.id}
            dispatch={dispatch}
            completed={element.completed}
            item={element.item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
