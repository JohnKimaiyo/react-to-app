import { createNode } from "@rootzjs/core";
import { Component } from "../components/TodoList";

const [node, dispatchNode] = createNode("TodoList", Component);

node.state({
  todos: []
});

// dispatch the created Node
export const TodoList = dispatchNode(node);
