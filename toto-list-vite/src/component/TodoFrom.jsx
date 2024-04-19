import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContex";

function TodoForm(){
    let [input,setInput]=useState('');
    let {addTodo }=useContext(TodoContext)
    function handleTodo(){
        if(input.trim()!==''){
            let Task={
                id: Date.now(),
                Task:input
            }
            addTodo(Task);
            setInput('');
        }
    }
    return(
        <>
        <h2>Todo App</h2>
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button onClick={handleTodo}>ADD TODO</button>
        </>
    )
}
export {TodoForm}