import { useContext } from "react";
import { TodoContext } from '../context/todoContex'
function TodoList(){
    const {todos, deleteTodo}=useContext(TodoContext);
    return(
        <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.Task}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        </div>
    )
}
export {TodoList}