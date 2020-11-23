import thunk from 'redux-thunk';
import { loadDataReducer } from '../reducers';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(loadDataReducer, applyMiddleware(logger, thunk));