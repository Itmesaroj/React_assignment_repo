import {legacy_createStore} from 'redux'

const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case "REMOVE_TODO":
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
let store=legacy_createStore(todoReducer)

export default store;