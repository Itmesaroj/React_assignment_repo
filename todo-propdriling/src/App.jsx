import { useState } from 'react'
import './App.css'
import  TodoForm  from './TodoFrom'
import TodoList from './TodoList';
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false  
    };
    setTodos([...todos, newTodo]);
  };

  const toggleStatus = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed  
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App
