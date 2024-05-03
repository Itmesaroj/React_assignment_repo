
const initialState = {
    coffeeList: [],
    loading: false,
    error: null
  };
  
  const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COFFEE_SUCCESS':
        return {
          ...state,
          coffeeList: action.payload,
          loading: false,
          error: null
        };
      case 'FETCH_COFFEE_FAILURE':
        return {
          ...state,
          coffeeList: [],
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default coffeeReducer;
  