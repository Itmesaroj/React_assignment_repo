// store.js
import { legacy_createStore, combineReducers } from 'redux';
import footballMatchesReducer from './Football';

const rootReducer = combineReducers({
  footballMatches: footballMatchesReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
