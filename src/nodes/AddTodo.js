import { createNode } from "@rootzjs/core";
import { Component } from "../components/AddTodo";

const [node, dispatchNode] = createNode("AddTodo", Component);

// state variable is the current state of "TodoList" Node
node.useContract("TodoList", "ADD_TODO", (state, [newTodo]) => {
  return {
    todos: [...state.todos, { name: newTodo, completed: false }]
  };
});

// dispatch the created Node
export const AddTodo = dispatchNode(node);
