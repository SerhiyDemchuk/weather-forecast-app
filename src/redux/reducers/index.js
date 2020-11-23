import { LOAD_DATA_FAILURE, LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS } from '../actions/actionTypes';

let initialState = {
    cityName: '',
    countryName: '',
    cityDesc: '',
    cityTemp: null,
    cityTempAboveZero: null,
    cityTempBelowZero: null,
    error: ''
}


export const loadDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_REQUEST:
            return{
                ...state
            }
        // in a case of success we get a needed info to be saved in out state
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                cityName: action.payload.name,
                countryName: action.payload.sys.country,
                cityDesc: action.payload['weather'][0]['description'],
                cityTemp: Math.round(action.payload.main.temp - 273.15),
                cityTempAboveZero: Math.round(action.payload.main.temp - 273.15) >= 0 ? Math.round(action.payload.main.temp - 273.15) : null,
                cityTempBelowZero: Math.round(action.payload.main.temp - 273.15) < 0 ? Math.round(action.payload.main.temp - 273.15) : null,
                error: false,
            }
            // otherwise show an error
        case LOAD_DATA_FAILURE:
            return {
                ...state,
                cityName: 'An error occured',
                cityDesc: 'Please, type another name',
                error: action.payload
            }
        default:
            return state;
    }
}