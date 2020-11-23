import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));