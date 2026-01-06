import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoContainer from "./Components/TodoContainer";
import WelComeMessage from "./Components/WelComeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      tdate: "4/10/2023",
    },
    {
      name: "go to college",
      tdate: "4/10/2023",
    }, 
  ];

  const [todoItems, SetTodoItem] = useState(initialTodoItems);

  function onNewItem(itemName, itemtDate) {
    SetTodoItem((currValues) => {
      return [...currValues, { name: itemName, tdate: itemtDate }];
    });
  }

  function handleDeleteItem(todoItemName) {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    SetTodoItem(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem} />

      {todoItems.length == 0 && <WelComeMessage />}

      <TodoContainer todoItems={todoItems} onDeleteClick={handleDeleteItem} />

      {/* <TodoItem todoName={"Buy MIlk"} todoDate={"4/10/2023"} /> */}

      {/* <TodoItem todoName={"go to college"} todoDate={"4/10/2023"} /> */}
    </center>
  );
}

export default App;