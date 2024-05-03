// actions/coffeeActions.js
import axios from 'axios';
const fetchCoffee = (url) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(url);
        dispatch({ type: 'FETCH_COFFEE_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_COFFEE_FAILURE', payload: error.message });
      }
    };
  };
  

  
export default fetchCoffee