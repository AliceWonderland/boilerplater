import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import myReducer from './dummyReducer'; // sample reducer

const store = createStore(
  myReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({collapsed: true})
  )
);

export default store;