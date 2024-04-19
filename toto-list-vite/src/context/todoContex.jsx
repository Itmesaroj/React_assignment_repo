import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  // Return JSX content inside the provider component
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
