import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from './action';

function Todo() {
    const todo = useSelector(state => state);
    console.log(todo)
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleToggle = (id, status) => {
        dispatch(updateTodo(id, !status));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <>
            <h2>Todo App</h2>
            <form>
                <input type="text" value={input} placeholder="Enter Task" onChange={(e) => setInput(e.target.value)} />
                <button type="button" onClick={handleAddTodo}>Add</button>
            </form>
            <ul>
                {todo.todos.map(todo => (
                    <li key={todo.id}>
                        
                        <input
                            type="checkbox"
                            checked={todo.status}
                            onChange={() => handleToggle(todo.id, todo.status)}
                        />
                        <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
