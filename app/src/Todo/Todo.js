import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <p
      className={props.completed ? "strike" : ""}
      //   onClick={props.markCompleted}
      id={props.id}
    >
      {props.item}
    </p>
  );
};

export default Todo;
