import React from "react";
import "./Todo.css";

const Todo = props => {
  const { dispatch } = props;
  return (
    <p
      className={props.completed ? "strike" : ""}
      onClick={() => dispatch({ type: "MARK_COMPLETED", payload: props.id })}
      id={props.id}
    >
      {props.item}
    </p>
  );
};

export default Todo;
