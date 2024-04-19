// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleStatus, deleteTodo }) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleStatus={toggleStatus}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
