import { put, takeEvery } from 'redux-saga/effects';
import * as ACTION from '../actions';
import { cityActions, weatherActions } from 'src/store/rootActions';
import { CHANGED_TEMPERATURE_SCALE } from '../actionTypes';

export function* getScaleAsync(action: { type: string; payload: string }) {
  yield put(ACTION.setTemperatureScale(action.payload));
  yield put(weatherActions.getWeather());
  yield put(cityActions.getWeatherForCities());
}

export default function* watchScaleAsync() {
  yield takeEvery(CHANGED_TEMPERATURE_SCALE, getScaleAsync);
}
