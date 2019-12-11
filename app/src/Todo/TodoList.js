import React, { useReducer } from "react";
import Todo from "./Todo";

import { reducer, initialState } from "../reducers/reducer";

const TodoList = props => {
  //   const [toDoState, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {props.toDoState.items.map(element => {
        return (
          <Todo
            key={element.id}
            id={element.id}
            completed={element.completed}
            item={element.item}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
