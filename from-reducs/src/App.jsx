import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  let initial = {
    email: "",
    password: ""
  }

  const [state, dispatch] = useReducer(reducer, initial);
  const [flag, setFlag] = useState(false);

  function reducer(state, action) {
    switch (action.type) {
      case "email":
        return { ...state, email: action.payload };
      case "password":
        return { ...state, password: action.payload };
      case "reset":
        return initial;
      default:
        return state;
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setFlag(true);
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type="email"
          value={state.email}
          placeholder='Enter Email'
          onChange={(e) => { dispatch({ type: "email", payload: e.target.value }) }}
        />
        <label htmlFor='password'>Password</label>
        <input
          type="password"
          id='password'
          value={state.password}
          placeholder='Enter Password'
          onChange={(e) => { dispatch({ type: "password", payload: e.target.value }) }}
        />
        <button type='submit'>Submit</button>
        <button onClick={(e) => {
          dispatch({ type: "reset" });
          setFlag(false);
        }}>Reset</button>
      </form>
      {flag && (state.email || state.password) ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </>
  )
}

export default App
