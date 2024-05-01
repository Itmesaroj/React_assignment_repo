import { useState } from 'react'

import './App.css'
import store from './store'
function App() {

  let state=store.getState();
  console.log(JSON.stringify(state));
  const addTodo = (todo) => ({
    type: "ADD_TODO",
    payload: todo,
  });
  
  const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    payload: id,
  });
  
  // Step 3: Implement Reducers
  const initialState = {
    todos: [],
  };
  
  store.dispatch(addTodo({ id: 1, text: 'Learn Redux' }));
  store.dispatch(addTodo({ id: 2, text: 'Build a Redux App' }));
  store.dispatch(removeTodo(1));
  const displayData = () => {
    const state = store.getState();
    console.log(JSON.stringify(state));
  };
  
  displayData();
  return (
    <>
   
    </>
  )
}

export default App
