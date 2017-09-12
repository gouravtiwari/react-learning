import { createStore, applyMiddleware } from 'redux';

import indexReducer from './components/reducers/index-reducer';
import { change } from './components/actions/name-actions';
import { update } from './components/actions/list-actions';

import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(indexReducer, middleware);

//console.log(store.getState());
store.dispatch(change("John"));
//console.log(store.getState());
store.dispatch(update("John"));
//console.log(store.getState());
store.dispatch(update("Jack"));
//console.log(store.getState());