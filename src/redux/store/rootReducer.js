import { combineReducers } from 'redux';
import { loadDataSuccessReducer, loadDataFailureReducer } from '../reducers';

const rootReducer = combineReducers({
    loadDataSuccess: loadDataSuccessReducer,
    loadDataFailure: loadDataFailureReducer,
});

export default rootReducer;