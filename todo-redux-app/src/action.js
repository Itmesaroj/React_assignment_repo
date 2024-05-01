// Action types
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: {
    title,
    status: false,
    id: new Date().getTime().toString(),
  },
});

export const updateTodo = (id, status) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    status,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
