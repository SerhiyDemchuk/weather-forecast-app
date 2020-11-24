import axios from 'axios';
import { loadDataSuccess, loadDataFailure, loadDataRequest } from '../actions';

// here we get a value from input to be placed for getting an info about city's weather
export function fetchApi(value) {
  return async (dispatch) => {
    dispatch(loadDataRequest());
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f10b637ca08b184f47102d9f1de2c344`)
    // in a case of a correct value we get info about city's weather
      .then((response) => {
        dispatch(loadDataSuccess(response.data));
      })
    // in other case we get a failure
      .catch((error) => {
        dispatch(loadDataFailure(error));
      });
  };
}
