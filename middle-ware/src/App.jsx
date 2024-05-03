
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  let count=useSelector(state=>state);
  let dispatch=useDispatch();
  function increment(){
    dispatch({type:"increment",payload:1})
  }
  function decrement(){
    dispatch({type:"decrment",payload:1})
  }
  return(
    <>
    {count}
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
