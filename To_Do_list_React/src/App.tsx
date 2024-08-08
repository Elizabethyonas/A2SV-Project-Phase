import { FaPen, FaClipboard } from "react-icons/fa";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./CSS/App.css";
import TodoService from "./TodoService";
import TodoTypes from "./todo";
import { useState } from "react";

function App() {
  const [, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());

  return (
    <div className="App">
      <h1 className="quote">Plan Your Day for better Productivity!</h1>
      <div className="header">
        <div className="logoside">
          <FaPen/>
          <h1>My Tasks</h1>
          <FaClipboard/>
        </div>
      </div>
      <TodoForm setTodos={setTodos} />
      <TodoList />
    </div>
  );
};

export default App
