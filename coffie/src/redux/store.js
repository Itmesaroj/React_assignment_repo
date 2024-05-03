import { legacy_createStore, applyMiddleware } from 'redux'; 
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import coffeeReducer from './reduser';



let store=legacy_createStore(coffeeReducer,applyMiddleware(thunk,logger));

export default store;