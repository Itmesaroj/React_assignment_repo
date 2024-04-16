import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [todo,setTodo]=useState([]);
  let [input,setInput]=useState("");
  function addTodo(){
    if (input.trim() !== '') {
      setTodo([...todo, input]);
      setInput('');
    }
  }

    function DeleteTodo(index) {
      const newTodo = [...todo]; 
      newTodo.splice(index, 1);
      setTodo(newTodo); 
    }
  
  return(
    <div>
      <h1>ToDo App</h1>
      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={addTodo}>ADD</button>

      <h2>All Todo List</h2>
      <div>
        {todo.map((todo,index)=>(
          <span key={index}>
             <p>{todo}</p>
             <span>
             <button onClick={()=>{
              DeleteTodo(index)
             }}>Delete</button>
             </span>
             
          </span>
         
        ))}
      </div>
    </div>
  )
}

export default App
