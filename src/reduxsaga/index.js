import { all, fork } from 'redux-saga/effects';
import fetchData from './getWheatherData'

export default function* rootSaga() {
  yield all([
    fork(fetchData)
  ]);
}
