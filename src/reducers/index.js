import { LOAD_DATA } from '../actions/ActionTypes';

let initialState = {
    cityName: '',
    countryName: '',
    cityDesc: '',
    cityTemp: '',
}

const loadDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA: 
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

export default loadDataReducer;