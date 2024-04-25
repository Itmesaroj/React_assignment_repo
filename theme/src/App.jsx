import React, { useReducer } from 'react';
import './App.css'

const initialState = {
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  const themeStyles = {
    backgroundColor: state.darkMode ? '#333' : '#fff',
    color: state.darkMode ? '#fff' : '#333',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={themeStyles}>
      <h1>Theme Toggle Example</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {state.darkMode ? 'Dark' : 'Light'}</p>
    </div>
  );
}

export default App;
