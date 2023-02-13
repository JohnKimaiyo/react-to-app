import React from "react";
import { AddTodo } from "./nodes/AddTodo";
import { TodoList } from "./nodes/TodoList";
import "./App.css";

export const App = function () {
  return (
    <div className="container">
      <div className="rootzorg">
        <a
          target="_blank"
          rel="noreferrer"
          href="http://rootzjs.org/contract#create-async-contract"
        >
          Rootz JS - Create Contract
        </a>
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

