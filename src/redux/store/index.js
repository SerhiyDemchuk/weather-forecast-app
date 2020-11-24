import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { loadDataReducer } from '../reducers';

export const store = createStore(loadDataReducer, applyMiddleware(logger, thunk));
