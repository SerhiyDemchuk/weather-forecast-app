import { LOAD_DATA } from './ActionTypes';
import axios from 'axios';

export function fetchApi() {
    console.log('I\'m active!!!');
    return async (dispatch) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Oslo&appid=f10b637ca08b184f47102d9f1de2c344`)
            .then((response) => {
                dispatch(loadData(response.data))
            })
    }
}

export function loadData(obj) {
    return {
        type: LOAD_DATA,
        payload: obj,
    }
}