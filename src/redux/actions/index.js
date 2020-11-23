import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, } from './actionTypes';
import axios from 'axios';

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

// here we get a value from input to be placed for getting an info about city's weather
export function fetchApi(value) {
    console.log('I\'m active!!!');
    return async (dispatch) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f10b637ca08b184f47102d9f1de2c344`)
        // in a case of a correct value we get info about city's weather
            .then((response) => {
                dispatch(loadDataSuccess(response.data))
            })
            // in other case we get a failure
            .catch((error) => {
                dispatch(loadDataFailure(error))
            })
    }
}