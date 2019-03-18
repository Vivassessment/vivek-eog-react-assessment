import { all, put, takeLatest } from 'redux-saga/effects';
import { getData, errorData, putData } from '../constants';
import Axois from "axios";

export function* fetchWheatherData(params) {
  try {
    const { payload:{ latitude,longitude } } = params
    let response = yield Axois.get(`https://react-assessment-api.herokuapp.com/api/weather/location/search/?lattlong=${latitude},${longitude}`)
     
    let wieodresp = yield Axois.get(`https://react-assessment-api.herokuapp.com/api/weather/location/${response.data[0].woeid}`)

    response.data[0] = {...response.data[0],consolidated_weather:wieodresp.data.consolidated_weather}
    yield put({
      type: putData,
      payload: response.data,
    });
  } catch (error) {
    let errorMessage = '';
    if (error.response) {
      errorMessage = error.response.data.message;
    } else {
      errorMessage = error.message;
    }
    yield put({
      type: errorData,
      payload: errorMessage,
    });
  }
}

export default function* root() {
  yield all([takeLatest(getData, fetchWheatherData)]);
}
