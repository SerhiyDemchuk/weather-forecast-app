import { LOAD_DATA_FAILURE, LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, } from './actionTypes';

export function loadDataRequest() {
    return {
        type: LOAD_DATA_REQUEST,
    }
}

export function loadDataSuccess(obj) {
    return {
        type: LOAD_DATA_SUCCESS,
        payload: obj,
    }
}

export function loadDataFailure(obj) {
    return {
        type: LOAD_DATA_FAILURE,
        payload: obj
    }
}