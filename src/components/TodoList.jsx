import React from "react";

export const Component = (nodeProps) => {
  const { state } = nodeProps;

  return (
    <div className="todo-container">
      <ul>
        {state.todos.map((todo) => (
          <li className="todo">{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};
