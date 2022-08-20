import React from "react";
import './App.css';
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar curso con Platzi', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'Seguir practicando', completed: false },
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
