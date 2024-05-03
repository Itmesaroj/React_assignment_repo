
import { legacy_createStore, applyMiddleware } from 'redux';
import Counter from './reduser';
const actionTypeLogger = store => next => action => {
  console.log('Action Type:', action.type);
  return next(action);
};


const payloadLogger = store => next => action => {
  console.log('Payload:', action.payload);
  return next(action);
};

const store = legacy_createStore(
    Counter,
  applyMiddleware(actionTypeLogger, payloadLogger)
);

export default store;
