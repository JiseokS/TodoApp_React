import React from 'react';
import { useState } from 'react';
import Format from './Compnents/Format';
import Body from './Compnents/Body';
import TodoList from './Compnents/TodoList';

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Format todo={todo}
       setTodo={setTodo} 
       todoList={todoList}
       setTodoList={setTodoList}></Format>
    </div>
  );
}

export default App;
