import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, NAME_FROM_INPUT } from '../actions/ActionTypes';

let initialState = {
    cityName: '',
    countryName: '',
    cityDesc: '',
    cityTemp: '',
}

export const nameFromInputReducer = (state = initialState, action) => {
    switch(action.type) {
        case NAME_FROM_INPUT:
            return {
                ...state,
                inputValue: action.payload,
            }
        default:
            return state;
    }
}

export const loadDataSuccessReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA_SUCCESS: 
            return {
                ...state,
                cityName: action.payload.name,
                countryName: action.payload.sys.country,
                cityDesc: action.payload['weather'][0]['description'],
                cityTemp: Math.round(action.payload.main.temp - 273.15),
            }
        default:
            return state;
    }
}

export const loadDataFailureReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA_FAILURE: 
            return {
                ...state,
                cityName: 'An error occured',
                countryName: '',
                cityDesc: 'Please, type another name',
                cityTemp: '',
            }
        default:
            return state;
    }
}