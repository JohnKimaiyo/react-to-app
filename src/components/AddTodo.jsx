import React from "react";

export const Component = (nodeProps) => {
  const { actions } = nodeProps;
  let inputRef = null;
  return (
    <div>
      <input
        className="input-todo"
        placeholder="Add a todo..."
        type="text"
        ref={(ref) => {
          inputRef = ref;
        }}
      />
      <button
        className="btn"
        onClick={() => {
          actions.ADD_TODO(inputRef.value);
          inputRef.value = "";
          inputRef.focus();
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
