import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, NAME_FROM_INPUT } from './ActionTypes';
import axios from 'axios';

export function fetchApi(value) {
    console.log('I\'m active!!!');
    return async (dispatch) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f10b637ca08b184f47102d9f1de2c344`)
            .then((response) => {
                dispatch(loadDataSuccess(response.data))
            })
    }
}

export function loadDataSuccess(obj) {
    return {
        type: LOAD_DATA_SUCCESS,
        payload: obj,
    }
}

// export function typeCity() {
//     return(dispatch) => {
//         dispatch(nameFromInput(this.value));
//     }
// }

export function loadDataFailure() {
    return {
        type: LOAD_DATA_FAILURE,
    }
}

export function nameFromInput(value) {
    return {
        type: NAME_FROM_INPUT,
        payload: value,
    }
}